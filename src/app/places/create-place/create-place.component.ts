import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { PlaceService } from './../shared/place.service';
import { Category, Place } from '../place.model';

@Component({
    templateUrl: './create-place.component.html',
    styleUrls: ['./create-place.component.css']
})
export class PlaceEditComponent implements OnInit {
    categories: FirebaseListObservable<Category[]>;
    initialPlace: Place;
    createPlaceForm: FormGroup;

    constructor(private placesService: PlaceService,
        private builder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.categories = this.placesService.getCategories();
        this.initialPlace = this.placesService.initializePlace();

        this.createPlaceForm = this.builder.group({
            heading: ['', [Validators.required, Validators.minLength(3)]],
            bodyText: ['', [Validators.required, Validators.minLength(100)]],
            imageUrl: ['', Validators.required],
            category: ['', Validators.required],
            location: this.builder.group({
                latitude: [],
                longitude: []
            })
        });
    }

    savePlace(place: Place) {
        if (this.createPlaceForm.dirty) {
            const newPlace = Object.assign({}, this.initialPlace, place);

            if (!newPlace.$key) {
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

    onCreateComplete(createdPlace: string): void {
        const route = '/places/' + createdPlace;
        this.createPlaceForm.reset();
        console.log(createdPlace);
        console.log(route);
        this.router.navigate([route]);
    }

}
