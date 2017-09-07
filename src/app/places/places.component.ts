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
    orderedPlaces: Place[] = [];
    filterBy = '';
    orderBy = '';

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
        if (filter === '') {
            return this.allPlaces;
        }

        return this.allPlaces.filter(p => p.category === filter);
    }

    orderPlaces(order) {
        if (order === 'all') {
            this.visiblePlaces = this.allPlaces.slice();
        } else {
            this.visiblePlaces = this.allPlaces.slice().sort((x, y) => {
                return this.compareFunction(x[order], y[order]);
            });
        }

        return this.visiblePlaces;
    }

    getSelectedOrder(event) {
        this.orderBy = event.target.value;
        this.orderPlaces(this.orderBy);
    }

    getSelectedCategory(event) {
        this.filterBy = event.target.value;
        this.visiblePlaces = this.filterPlaces(this.filterBy);
    }

    private compareFunction(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        }

        return a.localeCompare(b);
    }
}
