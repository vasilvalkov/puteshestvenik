import { PlaceEditComponent } from './../places/place-edit/place-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'auth',
                children: [
                    { path: 'create-place', component: PlaceEditComponent},
                    // { path: 'profile', component: UserProfileComponent }]
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
