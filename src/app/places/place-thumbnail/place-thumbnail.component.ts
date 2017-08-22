import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-place-thumbnail',
    templateUrl: './place-thumbnail.component.html',
    styleUrls: ['./place-thumbnail.component.css']
})
export class PlaceThumbnailComponent implements OnInit {

    @Input() heading: string;
    @Input() imageUrl: string;

    constructor() { }

    ngOnInit() {
    }

}
