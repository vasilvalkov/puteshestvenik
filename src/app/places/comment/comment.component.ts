import { Component, Input, Inject, OnInit } from '@angular/core';

import { AppConstantInjectionToken, AppConstants } from './../../app.constants.injection';
import { Comment } from './comment.model';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() commentData: Comment;
    dateFormat: string;

    constructor(
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) {}

    ngOnInit() {
        this.dateFormat = this.app_constants.default.DATE_FORMAT;
    }

}
