import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

    places: any[] = [
        {
            heading: 'Рилски манастир',
            imageUrl: 'http://www.dinita-tours.com/files/148397219523128.jpg'
        },
        {
            heading: 'Царевец',
            imageUrl: 'https://i.ytimg.com/vi/Ctb530SGn5w/maxresdefault.jpg'
        },
        {
            heading: 'Хайдушки водопади',
            imageUrl: 'https://chateauslatina.files.wordpress.com/2014/07/img_15f17.jpg'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
