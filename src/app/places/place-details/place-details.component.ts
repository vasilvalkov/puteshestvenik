import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlacesModule } from './../places.module';
import { PlaceService } from '../shared/place.service';
import { Place } from '../place.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './place-details.component.html',
    styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit, OnDestroy {
    place: Place;
    private getPlaceSubscription: Subscription;

    constructor(private placeService: PlaceService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getPlaceSubscription = this.placeService.getPlace(this.route.snapshot.params['id'])
            .subscribe(place => {
                this.place = place;
                console.log(this.place.comments);
            });
    }

    ngOnDestroy(): void {
        this.getPlaceSubscription.unsubscribe();
    }
}
