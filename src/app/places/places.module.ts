import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './../comment/comment.component';
import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';
import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';
import { StarRatingComponent } from './../common/star-rating/star-rating.component';
import { PlaceService } from './shared/place.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PlacesRoutingModule
    ],
    declarations: [
        PlacesComponent,
        PlaceDetailsComponent,
        StarRatingComponent,
        PlaceEditComponent,
        PlaceThumbnailComponent,
        CommentComponent
    ],
    exports: [
        PlaceThumbnailComponent,
        CommentComponent
    ],
    providers: [
        PlaceService
    ]
})
export class PlacesModule { }
