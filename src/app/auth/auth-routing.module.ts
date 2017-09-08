import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'auth',
                children: [
                    { path: 'login', component: LoginComponent },
                    // { path: 'register', component: RegisterComponent},
                    // { path: 'profile', component: UserProfileComponent }]
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
