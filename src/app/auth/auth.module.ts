import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: [
        AuthGuardService
    ]
})
export class AuthModule { }
