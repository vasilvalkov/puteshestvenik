import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppConstants } from './../app.constants.injection';
import { AuthService } from '../core/auth/auth.service';
import { AppConstantInjectionToken } from '../app.constants.injection';
import { UserCredential } from './../core/user/user-credential.interface';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    passwordMinLength: number;

    constructor(
        private builder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) { }

    ngOnInit() {
        this.passwordMinLength = this.app_constants.validation.PASSWORD_MIN_LENGTH;
        this.buildForm();
    }

    onLoginUser(credentials: UserCredential): void {
        this.authService.login(credentials.email, credentials.password)
            .then(() => {
                this.router.navigate([`/${this.app_constants.routes.PLACES}`]);
            })
            .catch(error => console.log(error));
    }

    isInvalid(controlName: string): boolean {
        const control = this.loginForm.get(controlName);
        return control.touched && control.invalid;
    }

    hasError(controlName: string, validator: string): boolean {
        const control = this.loginForm.get(controlName);
        return control.touched && control.hasError(validator);
    }

    private buildForm(): void {
        this.loginForm = this.builder.group({
            email: ['', [Validators.required, Validators.pattern(this.app_constants.validation.EMAIL_PATTERN)]],
            password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
        });
    }

}
