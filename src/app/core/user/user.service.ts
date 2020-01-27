import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

import { AuthService } from '../auth/auth.service';
import { UserWithCredential } from '../../user/user.model';
import { AppConstantInjectionToken, AppConstants } from '../../app.constants.injection';


@Injectable()
export class UserService {

    constructor(
        private authService: AuthService,
        private roter: Router,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    initializeUser(): UserWithCredential {
        return this.app_constants.default.USER_WITH_CREDENTIAL;
    }

    registerUser(user: UserWithCredential): void {
        this.authService.createUserWithEmailAndPassword(user)
            .subscribe(_ => this.roter.navigate([this.app_constants.routes.PLACES]));
    }
}
