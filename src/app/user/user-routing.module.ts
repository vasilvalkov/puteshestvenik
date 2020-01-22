import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../core/auth/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                canActivate: [AuthGuardService],
                children: [
                    { path: 'profile', component: ProfileComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
