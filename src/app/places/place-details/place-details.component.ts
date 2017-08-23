import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlacesModule } from './../places.module';
import { PlaceService } from '../shared/place.service';

@Component({
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  place: any;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.place = this.placeService.getPlace(+this.route.snapshot.params['id']);
  }

}
