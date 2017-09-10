import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Place } from './../places/place.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { PlaceService } from './../places/shared/place.service';
import { Component, OnInit, Output, EventEmitter, Inject, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from 'bootstrap';
import { User as FbUser } from 'firebase/app';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    currentUser: FbUser;
    @Output() queryResult = new EventEmitter();
    foundPlaces: Place[] = [];

    places: FirebaseListObservable<Place[]>;
    allPlaces: Place[] = [];

    constructor(private placeService: PlaceService,
        public authService: AuthService,
        private router: Router,
        private db: AngularFireDatabase) { }

    ngOnInit() {
        this.places = this.placeService.getPlaces();
        this.places.subscribe(places => {
            this.allPlaces = places;
        });
        this.authService.currentUser.subscribe(user => {
            if (user) {
                this.db.object(`users/${user.uid}`).subscribe(data => {
                    const updatedUser = Object.assign({}, data, user);
                    console.log('auth updated user', updatedUser);
                    this.currentUser = updatedUser;
                });
            }
        });
    }

    search(query) {
        this.foundPlaces = this.allPlaces.filter(p => {
            if (p.heading.indexOf(query) !== -1 || p.bodyText.indexOf(query) !== -1) {
                return p;
            }
        });
        // this.modalService.show(el);
    }

    logout() {
        this.authService.logout()
            .then(() => {
                this.router.navigate(['/places']);
            });
    }

    // open(content) {
    //     this.modalService.open(content).result.then((result) => {
    //       this.closeResult = `Closed with: ${result}`;
    //     });
    //   }
}
