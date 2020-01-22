import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User as FbUser } from 'firebase/app';
import { Observable, Subscription, of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from './../../user/user.model';


@Injectable()
export class AuthService implements OnDestroy {

    currentUser: Observable<FbUser>;
    userInfo: User;

    private subs = new Subscription();

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase
    ) { }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    authenticateApp(): void {
        this.currentUser = this.afAuth.user;
        this.subs.add(
            this.afAuth.user
                .pipe(
                    switchMap(user => user ? this.db.object<User>(`users/${user.uid}`).valueChanges() : of(undefined as User))
                )
                .subscribe(user => {
                    this.userInfo = user;
                })
        );
    }

    createUserWithEmailAndPassword(email: string, pass: string): Observable<FbUser> {
        return from(
            this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(res => res.user)
        );
    }

    login(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

}
