import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Category, Place } from '../place.model';

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

    initializePlace(): Place {
        return <Place>{
            heading: '',
            imageUrl: '',
            thumbUrl: '',
            rating: 0,
            category: '',
            location: { latitude: 0, longitude: 0 },
            bodyText: '',
            voters: []
        };
    }

    createPlace(place: Place) {
        return this.places.push(place);
    }

    updatePlace(key: string, updatedFields: {}) {
        this.places.update(key, updatedFields)
            .catch(error => this.handleError(error));
    }

    getCategories(): FirebaseListObservable<Category[]> {
        return <FirebaseListObservable<Category[]>>this.db.list('/categories');
    }

    handleError(error) {
        console.log(error);
    }
}
