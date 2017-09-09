import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private builder: FormBuilder,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.loginForm = this.builder.group({
            // tslint:disable-next-line:max-line-length
            email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    loginUser(credentials) {
        this.authService.login(credentials.email, credentials.password)
            .then((user) => {
                this.router.navigate(['/places']);
            })
            .catch(error => console.log(error));
    }

}
