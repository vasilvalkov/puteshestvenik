import { PlaceService } from './shared/place.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
    imports: [
        CommonModule,
        PlacesRoutingModule
    ],
    declarations: [
        PlacesComponent,
        PlaceThumbnailComponent,
        PlaceDetailsComponent
    ],
    providers: [
        PlaceService
    ]
})
export class PlacesModule { }
