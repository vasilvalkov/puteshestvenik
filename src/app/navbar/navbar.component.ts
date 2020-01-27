import { AppConstantInjectionToken, AppConstants } from './../app.constants.injection';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    placesRoute: string;

    constructor(
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.placesRoute = `/${this.app_constants.routes.PLACES}`;
    }
}
