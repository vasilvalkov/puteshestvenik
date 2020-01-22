import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../core/auth/auth.service';
import { Place } from './../places/place.model';
import { User as FbUser } from 'firebase/app';
import { PlaceService } from '../core/place/place.service';


declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    @Output() queryResult = new EventEmitter();
    searchQueryString: string;
    currentUser: Observable<FbUser>;
    foundPlaces: Place[] = [];

    places: Observable<Place[]>;
    allPlaces: Place[] = [];

    private subs = new Subscription();

    constructor(
        private placeService: PlaceService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.places = this.placeService.getPlaces();
        this.currentUser = this.authService.currentUser;

        this.subs.add(
            this.places.subscribe(places => {
                this.allPlaces = places;
            })
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    search(query): void {
        this.searchQueryString = query;

        this.foundPlaces = this.allPlaces.filter(p => {
            if (p.heading.indexOf(query) !== -1 || p.bodyText.indexOf(query) !== -1) {
                return p;
            }
        });

        $('#modal').modal('show');
    }

    closeModal(param): void {
        $('#modal').modal('toggle');
        this.router.navigate(['/places', param]);
    }

    logout(): void {
        this.authService.logout();
    }
}
