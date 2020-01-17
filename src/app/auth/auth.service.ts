import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User as FbUser } from 'firebase/app';


@Injectable()
export class AuthService implements OnDestroy {

    authState: FbUser = null;
    currentUser: Observable<FbUser>;

    private subs = new Subscription();

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFireDatabase,
        private router: Router
    ) { }

    secureApp(): void {
        this.currentUser = this.afAuth.authState;
        this.subs.add(
            this.afAuth.user.subscribe((user) => {
                this.authState = user;
            })
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    createUserWithEmailAndPassword(email: string, pass: string): Promise<void> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
            .then((res) => {
                this.authState = res.user;
            })
            .catch(error => console.log(error));
    }

    login(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

}
