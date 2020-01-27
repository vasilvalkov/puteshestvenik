import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlacesComponent } from './places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';


const placeRoutes: Routes = [
    { path: 'create', component: PlaceEditComponent },
    { path: ':id', component: PlaceDetailsComponent },
    { path: '', component: PlacesComponent },
];


@NgModule({
    imports: [RouterModule.forChild(placeRoutes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule { }
