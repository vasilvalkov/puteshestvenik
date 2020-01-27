import { Component, OnInit, Input } from '@angular/core';

import { Place } from './../place.model';


@Component({
  selector: 'app-place-info-panel',
  templateUrl: './place-info-panel.component.html',
  styleUrls: ['./place-info-panel.component.scss']
})
export class PlaceInfoPanelComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
