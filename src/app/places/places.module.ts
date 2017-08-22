import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PlacesRoutingModule
    ],
    declarations: [PlacesComponent]
})
export class PlacesModule { }
