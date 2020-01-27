import { AppConstants } from './../../app.constants.injection';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { Place } from '../../places/place.model';
import { PlaceService } from '../../core/place/place.service';
import { AppConstantInjectionToken } from '../../app.constants.injection';


declare var $: any;


@Component({
  selector: 'app-search-places',
  templateUrl: './search-places.component.html',
  styleUrls: ['./search-places.component.scss']
})
export class SearchPlacesComponent implements OnInit, OnDestroy {

  foundPlaces: Place[] = [];
  private allPlaces: Place[] = [];

  private subs = new Subscription();

  constructor(
    private placeService: PlaceService,
    private router: Router,
    @Inject(AppConstantInjectionToken) private app_constants: AppConstants
  ) { }

  ngOnInit() {
    this.subs.add(
      this.placeService.getPlaces().subscribe(places => {
        this.allPlaces = places;
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  search(query: string): void {
    if (!query) {
      return;
    }

    this.foundPlaces = this.allPlaces.filter(p => {
      if (p.heading.indexOf(query) !== -1 || p.bodyText.indexOf(query) !== -1) {
        return p;
      }
    });

    $('#modal').modal('show');
  }

  closeModal(placeId: number): void {
    $('#modal').modal('toggle');
    this.router.navigate([`/${this.app_constants.routes.PLACES}`, placeId]);
  }

}
