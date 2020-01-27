import { Component, OnInit, Input, Inject } from '@angular/core';

import { Place } from '../../places/place.model';
import { AppConstantInjectionToken, AppConstants } from '../../app.constants.injection';


@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  @Input() places: Place[];
  placeUrl: string;

  constructor(
    @Inject(AppConstantInjectionToken) private app_constants: AppConstants
  ) { }

  ngOnInit() {
    this.placeUrl = `/${this.app_constants.routes.PLACES}`;
  }

}
