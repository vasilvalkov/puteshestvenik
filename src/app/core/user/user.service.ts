import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { User, UserWithCredential } from '../../user/user.model';


@Injectable()
export class UserService {

    constructor(
        private authService: AuthService,
        private roter: Router,
        private db: AngularFireDatabase
    ) { }

    initializeUser(): User {
        return {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            places: [],
            comments: [],
            // tslint:disable-next-line:max-line-length
            photoUrl: 'https://firebasestorage.googleapis.com/v0/b/pateshestvenik-fab85.appspot.com/o/users%2Favatar.jpg?alt=media&token=cf2f6546-4b2f-4537-bd5d-3bb7d23a9039'
        } as User;
    }

    registerUser(user: UserWithCredential): void {
        this.authService.createUserWithEmailAndPassword(user.email, user.password)
            .pipe(
                tap(_ => this.updateUserData(user))
            )
            .subscribe(_ => this.roter.navigate(['/places']));
    }

    updateUserData(userData: Partial<User>): Observable<void> {
        return this.authService.currentUser
            .pipe(
                take(1),
                switchMap(fbUser => {
                    const path = `users/${fbUser.uid}`;
                    return this.db.object<User>(path).update(userData);
                })
            );
    }
}
