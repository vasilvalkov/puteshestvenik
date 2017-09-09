import { Injectable, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

    createUserWithEmailAndPassword(email: string, pass: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
            .then((user) => {
                this.authState = user;
            })
            .catch(error => console.log(error));
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

}
