import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styles: ['.crop { overflow: hidden; }']
})
export class StarRatingComponent implements OnInit {
    @Input() rating: number;
    starWidth: number;

    constructor() { }
    ngOnInit() {
        this.starWidth = this.rating * 86 / 5;
    }

}
