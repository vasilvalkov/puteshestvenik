import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements OnInit {
    authState: any = null;
    currentUser: Observable<firebase.User>;

    ngOnInit(): void {
        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth;
        });
    }

    constructor(private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router) {
        this.currentUser = afAuth.authState;
    }

    login(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.currentUser.subscribe(user => {
            this.authState = user;
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }

}
