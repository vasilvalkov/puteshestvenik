import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UserRoutingModule
    ],
    declarations: [
        ProfileComponent
    ]
})
export class UserModule { }
