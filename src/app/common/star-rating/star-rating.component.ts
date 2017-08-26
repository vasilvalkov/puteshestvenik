import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styles: ['[star] { color: #ff9800; }']
})
export class StarRatingComponent implements OnInit {
    @Input() rating: number;
    @Input() topRating: number;
    stars = [];

    constructor() { }
    ngOnInit() {
        for (let index = 1; index <= this.topRating; index++) {
            this.stars.push(index);
        }
    }

}
