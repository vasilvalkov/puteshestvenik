import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlaceThumbnailComponent } from './place-thumbnail/place-thumbnail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { SearchPlacesComponent } from './search-places/search-places.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PlaceThumbnailComponent,
    StarRatingComponent,
    PlaceListComponent,
    SearchPlacesComponent,
    LoginMenuComponent
  ],
  exports: [
    PlaceThumbnailComponent,
    StarRatingComponent,
    PlaceListComponent,
    SearchPlacesComponent,
    LoginMenuComponent
  ]
})
export class SharedModule { }
