import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment/comment.component';
import { PlacesComponent } from './places.component';
import { PlacesRoutingModule } from './places-routing.module';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        PlacesRoutingModule
    ],
    declarations: [
        PlacesComponent,
        PlaceDetailsComponent,
        PlaceEditComponent,
        CommentComponent
    ],
    exports: [
        PlacesComponent,
        PlaceEditComponent,
        CommentComponent
    ]
})
export class PlacesModule { }
