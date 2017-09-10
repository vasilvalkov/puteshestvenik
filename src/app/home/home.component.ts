import { Place } from './../places/place.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlaceService } from './../places/shared/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    places: Place[];
    topPlaces: Place[];

    constructor(private placeService: PlaceService) { }

    ngOnInit() {
        this.placeService.getPlaces().subscribe(places => {
            this.places = places;
            this.topPlaces = this.places
                .slice()
                .sort((x, y) => this.compareFunction(x.rating, y.rating))
                .slice(0, 3);
        });
    }

    private compareFunction(a, b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    }
}
