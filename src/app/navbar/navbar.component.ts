import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Place } from './../places/place.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PlaceService } from './../places/shared/place.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from 'bootstrap';
import { User as FbUser } from 'firebase/app';

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    searchQueryString: string;
    currentUser: FbUser;
    @Output() queryResult = new EventEmitter();
    foundPlaces: Place[] = [];

    places: AngularFireList<Place>;
    allPlaces: Place[] = [];

    constructor(private placeService: PlaceService,
        public authService: AuthService,
        private router: Router,
        private db: AngularFireDatabase) { }

    ngOnInit() {
        this.places = this.placeService.getPlaces();
        this.places.valueChanges().subscribe(places => {
            this.allPlaces = places;
        });
        this.authService.currentUser.subscribe(user => {
            if (user) {
                this.db.object(`users/${user.uid}`).valueChanges().subscribe(data => {
                    const updatedUser = Object.assign({}, data, user);
                    this.currentUser = updatedUser;
                });
            }
        });
    }

    search(query) {
        this.searchQueryString = query;

        this.foundPlaces = this.allPlaces.filter(p => {
            if (p.heading.indexOf(query) !== -1 || p.bodyText.indexOf(query) !== -1) {
                return p;
            }
        });

        $('#modal').modal('show');
    }

    closeModal(param) {
        $('#modal').modal('toggle');
        this.router.navigate(['/places', param]);
    }

    logout() {
        this.authService.logout()
            .then(() => {
                this.router.navigate(['/places']);
            });
    }
}
