import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { User, UserWithCredential } from '../../user/user.model';
import { AppConstantInjectionToken, AppConstants } from '../../app.constants.injection';


@Injectable()
export class UserService {

    constructor(
        private authService: AuthService,
        private roter: Router,
        private db: AngularFireDatabase,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    initializeUser(): UserWithCredential {
        return this.app_constants.default.USER_WITH_CREDENTIAL;
    }

    registerUser(user: UserWithCredential): void {
        this.authService.createUserWithEmailAndPassword(user.email, user.password)
            .pipe(
                tap(_ => this.updateUserData(user))
            )
            .subscribe(_ => this.roter.navigate([this.app_constants.routes.PLACES]));
    }

    updateUserData(userData: Partial<User>): Observable<void> {
        return this.authService.currentUser
            .pipe(
                take(1),
                switchMap(fbUser => {
                    const path = `${this.app_constants.storageRefs.USERS}/${fbUser.uid}`;
                    return this.db.object<User>(path).update(userData);
                })
            );
    }
}
