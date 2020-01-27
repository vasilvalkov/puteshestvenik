import { AuthService } from './../core/auth/auth.service';
import { AppConstantInjectionToken, AppConstants } from './../app.constants.injection';
import { Component, OnInit, Inject } from '@angular/core';

import { Place } from './../places/place.model';
import { PlaceService } from '../core/place/place.service';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    places: Place[];
    topPlaces: Place[];
    registerRoute: string;
    placesRoute: string;
    hasLoggedUser: boolean;

    constructor(
        private placeService: PlaceService,
        private authService: AuthService,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.fetchPlaces();
        this.registerRoute = `/${this.app_constants.routes.REGISTER}`;
        this.placesRoute = `/${this.app_constants.routes.PLACES}`;
        this.authService.currentUser
            .subscribe(res => this.hasLoggedUser = !!res);
    }

    private fetchPlaces(): void {
        this.placeService.getPlaces().subscribe(places => {
            this.places = places;
            this.topPlaces = this.places
                .slice()
                .sort((x, y) => this.compareFunction(x.rating, y.rating))
                .slice(0, 4);
        });
    }

    private compareFunction(a, b): number {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    }
}
