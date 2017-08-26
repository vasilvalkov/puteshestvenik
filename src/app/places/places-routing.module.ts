import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlacesComponent } from './places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'places', component: PlacesComponent },
            { path: 'places/:id', component: PlaceDetailsComponent }
        ])
    ],
    exports: [RouterModule]
})
export class PlacesRoutingModule { }