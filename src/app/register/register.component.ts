import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from './../user/user.model';
import { UserService } from './../user/shared/user.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private userService: UserService,
        private builder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.registerForm = this.builder.group({
            firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            // tslint:disable-next-line:max-line-length
            email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
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
}
