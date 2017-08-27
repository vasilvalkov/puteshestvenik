import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Place } from '../place.model';

@Injectable()
export class PlaceService  {
    places: FirebaseListObservable<Place[]>;

    constructor(private db: AngularFireDatabase) {
        this.places = this.db.list('/places');
    }

    getPlaces() {
        return this.places;
    }

    getPlace(id: string) {
        return this.db.object('/places/' + id);
    }

    createPlace(place: Place) {
        const newPlaceThenableRef = this.places.push(place);

        return newPlaceThenableRef;
    }

    updatePlace(key: string, updatedFields: {}) {
        this.places.update(key, updatedFields);
    }
}
