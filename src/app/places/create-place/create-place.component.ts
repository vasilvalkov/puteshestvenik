import { PlaceService } from './../shared/place.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Place } from '../place.model';

@Component({
    templateUrl: './create-place.component.html',
    styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {
    categories;
    createPlaceForm: FormGroup;

    constructor(private placesService: PlaceService, private builder: FormBuilder) { }

    ngOnInit() {
        this.categories = this.placesService.getCategories();

        this.createPlaceForm = this.builder.group({
            heading: ['', [Validators.required, Validators.minLength(3)]],
            bodyText: ['', [Validators.required, Validators.minLength(100)]],
            rating: 0,
            imageUrl: ['', Validators.required]
        });
    }

    create(place: Place) {
        this.placesService.createPlace(place);
    }

}
