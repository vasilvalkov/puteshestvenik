import { StarRatingComponent } from './../common/star-rating/star-rating.component';
import { PlaceService } from './shared/place.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceEditComponent } from './create-place/create-place.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PlacesRoutingModule
    ],
    declarations: [
        PlacesComponent,
        PlaceThumbnailComponent,
        PlaceDetailsComponent,
        StarRatingComponent,
        PlaceEditComponent
],
    providers: [
        PlaceService
    ]
})
export class PlacesModule { }
