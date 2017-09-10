import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        UserComponent,
        ProfileComponent
    ]
})
export class UserModule { }
