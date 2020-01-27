import { Component, OnInit, Inject } from '@angular/core';

import { AppConstants } from './../../app.constants.injection';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../user.model';
import { AppConstantInjectionToken } from '../../app.constants.injection';


@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    currentUser: User;
    createPlaceRotue: string;

    constructor(
        public authService: AuthService,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.currentUser = this.authService.userInfo;
        this.createPlaceRotue = `/${this.app_constants.routes.PLACE_CREATE}`;
    }

}
