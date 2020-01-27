import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AppConstantInjectionToken, AppConstants } from './../../app.constants.injection';
import { FileUploadService } from '../../core/utils/fileUpload.service';
import { PlaceService } from '../../core/place/place.service';
import { Category, Place } from '../place.model';
import { Upload } from '../../core/utils/upload';

@Component({
    templateUrl: './place-edit.component.html',
    styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

    categories: Observable<Category[]>;
    initialPlace: Place;
    createPlaceForm: FormGroup;
    currentUpload: Upload;
    selectedFiles: FileList;
    headingMinLength: number;
    bodyTextMinLength: number;

    constructor(
        private placesService: PlaceService,
        private uploadService: FileUploadService,
        private builder: FormBuilder,
        private router: Router,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.initializeProperties();
        this.buildForm();
    }

    onDetectFiles(files: FileList): void {
        this.selectedFiles = files;
    }

    onUploadPicture(): void {
        const file = this.selectedFiles[0];
        this.currentUpload = new Upload(file);
        this.uploadService.pushUpload(this.currentUpload);
    }

    onSavePlace(place: Place): void {
        this.createPlaceForm.markAllAsTouched();

        if (this.createPlaceForm.valid && this.createPlaceForm.dirty) {
            place.imageUrl = this.uploadService.uploads.url;
            place.thumbUrl = this.uploadService.uploads.url;

            const newPlace = Object.assign({}, this.initialPlace, place);

            if (!newPlace.id) {
                return this.createPlace(newPlace);
            }

            return this.updatePlace(newPlace);
        }
    }

    updatePlace(place: Place): void {

    }

    onResetForm(): void {
        this.selectedFiles = null;
        this.currentUpload = null;
        this.createPlaceForm.reset();
    }

    hasError(controlName: string, validator: string): boolean {
        return this.createPlaceForm.get(controlName).touched && this.createPlaceForm.get(controlName).hasError(validator);
    }

    isInvalid(controlName: string): boolean {
        return this.createPlaceForm.get(controlName).touched && this.createPlaceForm.get(controlName).invalid;
    }

    private createPlace(place: Place): void {
        const key = this.placesService.createPlace(place).key;
        this.completeCreate(key);
    }

    private completeCreate(createdPlace: string): void {
        const route = `/${this.app_constants.routes.PLACES}/${createdPlace}`;
        this.createPlaceForm.reset();
        this.router.navigate([route]);
    }

    private initializeProperties() {
        this.headingMinLength = this.app_constants.validation.HEADING_MIN_LENGTH;
        this.bodyTextMinLength = this.app_constants.validation.BODYTEXT_MIN_LENGTH;
        this.categories = this.placesService.getCategories();
        this.initialPlace = this.placesService.initializePlace();
    }

    private buildForm() {
        this.createPlaceForm = this.builder.group({
            heading: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.headingMinLength)
                ]
            ],
            bodyText: [
                '',
                [
                    Validators.required,
                    Validators.minLength(this.bodyTextMinLength)
                ]
            ],
            // imageUrl: ['', Validators.required],
            // thumbUrl: ['', Validators.required],
            category: ['', Validators.required],
            location: this.builder.group({
                latitude: [],
                longitude: []
            })
        });
    }
}
