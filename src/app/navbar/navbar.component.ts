import { AppConstantInjectionToken, AppConstants } from './../app.constants.injection';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../core/auth/auth.service';
import { User as FbUser } from 'firebase/app';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    currentUser: Observable<FbUser>;
    placesRoute: string;
    userProfileRoute: string;

    constructor(
        private authService: AuthService,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.initializeProperties();
    }

    logout(): void {
        this.authService.logout();
    }

    initializeProperties(): void {
        this.currentUser = this.authService.currentUser;
        this.placesRoute = `/${this.app_constants.routes.PLACES}`;
        this.userProfileRoute = `${this.app_constants.routes.PROFILE}`;
    }
}
