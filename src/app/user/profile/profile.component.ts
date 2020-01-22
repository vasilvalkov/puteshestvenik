import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    currentUser: User;

    constructor(public authService: AuthService) { }

    ngOnInit() {
        this.currentUser = this.authService.userInfo;
    }

}
