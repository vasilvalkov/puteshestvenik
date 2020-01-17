import { FormBuilder, FormGroup } from '@angular/forms';
import { Place, Category } from './place.model';
import { PlaceService } from './shared/place.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    categories: Observable<Category[]>;
    filterForm: FormGroup;
    visiblePlaces: Place[] = [];

    private filterBy = '';
    private orderBy = '';
    private allPlaces: Place[];

    constructor(
        private placeService: PlaceService,
        private builder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.categories = this.placeService.getCategories().valueChanges();

        this.filterForm = this.builder.group({
            categoryName: 'Категория'
        });

        this.placeService.getPlaces().valueChanges().subscribe(places => {
            this.allPlaces = places;
            this.visiblePlaces = this.filterPlaces(this.filterBy);
        });
    }

    filterPlaces(filter: string): Place[] {
        if (filter === '') {
            return this.allPlaces;
        }

        return this.allPlaces.filter(p => p.category === filter);
    }

    orderPlaces(order): void {
        if (order === 'all') {
            this.visiblePlaces = this.allPlaces.slice();
        } else {
            this.visiblePlaces = this.allPlaces.slice().sort((x, y) => {
                return this.compareFunction(x[order], y[order]);
            });
        }
    }

    getSelectedOrder(event): void {
        this.orderBy = event.target.value;
        this.orderPlaces(this.orderBy);
    }

    getSelectedCategory(event): void {
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
