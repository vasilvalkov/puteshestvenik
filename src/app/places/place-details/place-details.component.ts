import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Place } from '../place.model';
import { PlaceService } from '../../core/place/place.service';


@Component({
    templateUrl: './place-details.component.html',
    styleUrls: ['./place-details.component.scss']
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
