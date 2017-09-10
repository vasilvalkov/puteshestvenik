import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User as FbUser } from 'firebase/app';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    currentUser;

    constructor(public authService: AuthService,
        private db: AngularFireDatabase) { }

    ngOnInit() {
        this.authService.currentUser.subscribe(user => {
            if (user) {
                this.db.object(`users/${user.uid}`).subscribe(data => {
                    const updatedUser = Object.assign({}, data, user);
                    this.currentUser = updatedUser;
                });
            }
        });
    }

}
