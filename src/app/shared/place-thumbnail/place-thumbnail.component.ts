import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
    selector: 'app-place-thumbnail',
    templateUrl: './place-thumbnail.component.html',
    styleUrls: ['./place-thumbnail.component.scss']
})
export class PlaceThumbnailComponent implements OnChanges {

    @Input() heading: string;
    @Input() imageUrl: string;

    backgroundUrl: SafeStyle;

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnChanges() {
        this.backgroundUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
    }

}
