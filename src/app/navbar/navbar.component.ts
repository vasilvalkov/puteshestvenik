import { Place } from './../places/place.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { PlaceService } from './../places/shared/place.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Output() queryResult = new EventEmitter();
    foundPlaces: Place[] = [];

    places: FirebaseListObservable<Place[]>;
    allPlaces: Place[] = [];

    constructor(private placeService: PlaceService) { }

    ngOnInit() {
        this.places = this.placeService.getPlaces();
        this.places.subscribe(places => {
            this.allPlaces = places;
        });
    }

    search(query) {
        this.foundPlaces = this.allPlaces.filter(p => {
            if (p.heading.indexOf(query) !== -1 || p.bodyText.indexOf(query) !== -1) {
                return p;
            }
        });
    }
}
