import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlacesComponent } from './places.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'places', component: PlacesComponent }
        ])
    ],
    exports: [RouterModule]
})
export class PlacesRoutingModule { }
