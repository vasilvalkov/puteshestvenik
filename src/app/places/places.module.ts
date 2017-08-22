import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';

@NgModule({
    imports: [
        CommonModule,
        PlacesRoutingModule
    ],
    declarations: [
        PlacesComponent,
        PlaceThumbnailComponent
]
})
export class PlacesModule { }
