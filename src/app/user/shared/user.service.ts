import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { User } from './../user.model';
import { Injectable } from '@angular/core';
import { User as FbUser } from 'firebase/app';

@Injectable()
export class UserService {
    currentUser;

    constructor(private authService: AuthService,
        private roter: Router,
        private db: AngularFireDatabase) {
        this.authService.currentUser.subscribe(user => {
            if (user) {
                let userDataFromDb;

                this.db.object(`users/${user.uid}`).subscribe(data => {
                    userDataFromDb = data;
                });

                const updatedUser = Object.assign({}, userDataFromDb, user);

                this.currentUser = updatedUser;
            }
        });
    }

    initializeUser(): User {
        return <User>{
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            places: [],
            comments: []
        };
    }

    registerUser(user) {
        this.authService.createUserWithEmailAndPassword(user.email, user.password)
            .then(createdUser => {
                this.authService.currentUser.subscribe(newUser => {
                    console.log('newUser', newUser);
                    this.currentUser = newUser;
                    this.updateUser(user);
                    this.roter.navigate(['/places']);
                });
                // this.currentUser = createdUser;
            });
    }

    updateUser(user: User) {
        this.currentUser.updateProfile({
            displayName: user.username,
            photoURL: null
        })
            .then(() => {
                console.log('saving data to db...');
                this.updateUserData(user);
            });
    }

    private updateUserData(userData: User): void {
        console.log('in db now with userData ->', userData);
        console.log('curreent user', this.currentUser);
        // Writes additional user data to realtime db
        // as no additional properties can be added to FbUser
        if (this.currentUser) {
            const path = `users/${this.currentUser.uid}`;

            this.db.object(path).update(userData)
                .catch(error => console.log(error));
        }
    }
}
