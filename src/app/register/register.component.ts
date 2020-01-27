import { AppConstants } from './../app.constants.injection';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './../user/user.model';
import { UserService } from '../core/user/user.service';
import { AppConstantInjectionToken } from '../app.constants.injection';


@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    nameMinLength: number;
    nameMaxLength: number;
    usernameMinLength: number;
    usernameMaxLength: number;
    passwordMinLength: number;

    constructor(
        private userService: UserService,
        private builder: FormBuilder,
        private router: Router,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.initializeProperties();
        this.buildForm();
    }

    onRegister(user: User) {
        this.registerForm.markAllAsTouched();

        if (user && this.registerForm.valid) {
            const initUser = this.userService.initializeUser();
            const newUser = Object.assign({}, initUser, user);
            this.userService.registerUser(newUser);
        }
    }

    onResetForm() {
        this.registerForm.reset();
    }

    onCancelRegistration() {
        this.onResetForm();
        this.router.navigate(['/']);
    }

    isInvalid(controlName: string): boolean {
        const control = this.registerForm.get(controlName);
        return control.touched && control.invalid;
    }

    hasError(controlName: string, validator: string): boolean {
        const control = this.registerForm.get(controlName);
        return control.touched && control.hasError(validator);
    }

    private initializeProperties() {
        this.nameMinLength = this.app_constants.validation.NAME_MIN_LENGTH;
        this.nameMaxLength = this.app_constants.validation.NAME_MAX_LENGTH;
        this.usernameMinLength = this.app_constants.validation.USERNAME_MIN_LENGTH;
        this.usernameMaxLength = this.app_constants.validation.USERNAME_MAX_LENGTH;
    }

    private buildForm(): void {
        const nameValidators = [
            Validators.required,
            Validators.minLength(this.nameMinLength),
            Validators.maxLength(this.nameMaxLength)
        ];

        this.registerForm = this.builder.group({
            firstName: ['', nameValidators],
            lastName: ['', nameValidators],
            username: ['', [
                Validators.required,
                Validators.minLength(this.usernameMinLength),
                Validators.maxLength(this.usernameMaxLength)
            ]],
            email: ['', [
                Validators.required,
                Validators.pattern(this.app_constants.validation.EMAIL_PATTERN)]
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(this.app_constants.validation.PASSWIRD_MIN_LENGTH)]
            ],
        });
    }
}
