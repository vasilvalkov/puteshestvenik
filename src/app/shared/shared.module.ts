import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceThumbnailComponent,
    StarRatingComponent
  ],
  exports: [
    PlaceThumbnailComponent,
    StarRatingComponent
  ]
})
export class SharedModule { }
