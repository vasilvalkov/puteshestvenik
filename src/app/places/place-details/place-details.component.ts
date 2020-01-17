import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { PlaceService } from '../shared/place.service';
import { Place } from '../place.model';


@Component({
    templateUrl: './place-details.component.html',
    styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit, OnDestroy {

    place: Observable<Place>;
    private subs = new Subscription();

    constructor(
        private placeService: PlaceService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.place = this.placeService.getPlace(this.route.snapshot.params['id']).valueChanges();
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
