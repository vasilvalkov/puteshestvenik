import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { UserLoggedGuardService } from './user-logged-guard.service';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthGuardService,
        AuthService,
        UserLoggedGuardService
    ]
})
export class AuthModule { }
