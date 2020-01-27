import { Injectable, OnDestroy, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User as FbUser } from 'firebase/app';
import { Observable, Subscription, of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User, UserWithCredential } from './../../user/user.model';
import { AppConstantInjectionToken, AppConstants } from '../../app.constants.injection';


@Injectable()
export class AuthService implements OnDestroy {

    currentUser: Observable<FbUser>;
    userInfo: User;

    private subs = new Subscription();

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    authenticateApp(): void {
        this.currentUser = this.afAuth.user;
        this.subs.add(
            this.afAuth.user
                .pipe(
                    switchMap(user => user ?
                        this.db.object<User>(`${this.app_constants.storageRefs.USERS}/${user.uid}`).valueChanges() :
                        of(undefined as User)
                    )
                )
                .subscribe(user => {
                    this.userInfo = user;
                })
        );
    }

    createUserWithEmailAndPassword(user: UserWithCredential): Observable<FbUser> {
        return from(
            this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    res.user.updateProfile({ displayName: `${user.firstName} ${user.lastName}`, photoURL: user.photoURL });

                    delete user.password;
                    this.updateUserData(res.user.uid, user);

                    return res.user;
                })
        );
    }

    login(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    private updateUserData(uid: string, userData: User): Promise<void> {
        const path = `${this.app_constants.storageRefs.USERS}/${uid}`;
        return this.db.object<User>(path).update(userData);
    }

}
