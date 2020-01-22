import { UserCredential } from './../core/user/user-credential.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../user/user.model';
import { UserService } from '../core/user/user.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(
        private userService: UserService,
        private builder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.buildForm();
    }

    register(user: User) {
        const initUser = this.userService.initializeUser();

        const newUser = Object.assign({}, initUser, user);

        this.userService.registerUser(newUser);
    }

    resetForm() {
        this.registerForm.reset();
    }

    cancelRegistration() {
        this.resetForm();
        this.router.navigate(['/']);
    }

    private buildForm() {
        this.registerForm = this.builder.group({
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            // tslint:disable-next-line:max-line-length
            email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
}
