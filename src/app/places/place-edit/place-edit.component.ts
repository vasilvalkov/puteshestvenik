import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { FileUploadService } from './../../common/fileUpload.service';
import { PlaceService } from './../shared/place.service';
import { Category, Place } from '../place.model';
import { Upload } from './../../common/upload';

@Component({
    templateUrl: './place-edit.component.html',
    styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit {
    categories: AngularFireList<Category>;
    initialPlace: Place;
    createPlaceForm: FormGroup;
    currentUpload: Upload;
    selectedFiles: FileList;

    constructor(private placesService: PlaceService,
        private uploadService: FileUploadService,
        private builder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.categories = this.placesService.getCategories();
        this.initialPlace = this.placesService.initializePlace();

        this.createPlaceForm = this.builder.group({
            heading: ['', [Validators.required, Validators.minLength(3)]],
            bodyText: ['', [Validators.required, Validators.minLength(100)]],
            // imageUrl: ['', Validators.required],
            // thumbUrl: ['', Validators.required],
            category: ['', Validators.required],
            location: this.builder.group({
                latitude: [],
                longitude: []
            })
        });
    }

    detectFiles(event) {
        this.selectedFiles = event.target.files;
    }

    uploadPicture() {
        const file = this.selectedFiles[0];
        this.currentUpload = new Upload(file);
        const uploadedFile = this.uploadService.pushUpload(this.currentUpload);
    }

    savePlace(place: Place) {
        if (this.createPlaceForm.dirty) {
                place.imageUrl = this.uploadService.uploads.url;
                place.thumbUrl = this.uploadService.uploads.url;

                const newPlace = Object.assign({}, this.initialPlace, place);

                if (!newPlace.id) {
                    return this.createPlace(newPlace);
                }

                return this.updatePlace(newPlace);
        }
    }

    createPlace(place: Place): void {
        const key = this.placesService.createPlace(place).key;
        this.onCreateComplete(key);
    }

    updatePlace(place: Place) {

    }

    resetForm() {
        this.selectedFiles = null;
        this.createPlaceForm.reset();
    }

    onCreateComplete(createdPlace: string): void {
        const route = '/places/' + createdPlace;
        this.createPlaceForm.reset();
        console.log(createdPlace);
        console.log(route);
        this.router.navigate([route]);
    }
}
