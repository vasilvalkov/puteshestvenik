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
                    this.currentUser = newUser;
                    this.updateUser(user);
                    this.roter.navigate(['/places']);
                });
            });
    }

    updateUser(user: User) {
        this.currentUser.updateProfile({
            displayName: user.username,
            // tslint:disable-next-line:max-line-length
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/pateshestvenik-fab85.appspot.com/o/users%2Favatar.jpg?alt=media&token=cf2f6546-4b2f-4537-bd5d-3bb7d23a9039'
        })
            .then(() => {
                console.log('saving data to db...');
                this.updateUserData(user);
            });
    }

    private updateUserData(userData: User): void {
        // Writes additional user data to realtime db
        // as no additional properties can be added to FbUser
        if (this.currentUser) {
            const path = `users/${this.currentUser.uid}`;

            this.db.object(path).update(userData)
                .catch(error => console.log(error));
        }
    }
}
