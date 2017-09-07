import { FormBuilder, FormGroup } from '@angular/forms';
import { Place, Category } from './place.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlaceService } from './shared/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
    places: FirebaseListObservable<Place[]>; // = this.placeService.getPlaces();
    categories: FirebaseListObservable<Category[]>;
    filterForm: FormGroup;
    allPlaces: Place[];
    visiblePlaces: Place[] = [];
    filterBy = '';

    constructor(private placeService: PlaceService,
        private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.places = this.placeService.getPlaces();
        this.categories = this.placeService.getCategories();

        this.filterForm = this.builder.group({
            categoryName: 'Категория'
        });

        this.places.subscribe(places => {
            this.allPlaces = places;
            this.visiblePlaces = this.filterPlaces(this.filterBy);
        });
    }

    filterPlaces(filter) {
        console.log('filter:', filter);
        if (filter === '') {
            return this.allPlaces;
        }

        return this.allPlaces.filter(p => p.category === filter);
    }

    getSelectedCategory(event) {
        this.filterBy = event.target.value;
        this.visiblePlaces = this.filterPlaces(this.filterBy);
    }
}
