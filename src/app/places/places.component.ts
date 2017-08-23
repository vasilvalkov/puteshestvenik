import { PlaceService } from './shared/place.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    places: any[] = this.placeService.getPlaces();

    constructor(private placeService: PlaceService) {}

    ngOnInit() {
    }
}
