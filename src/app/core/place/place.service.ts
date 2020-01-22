import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Category, Place } from '../../places/place.model';

@Injectable()
export class PlaceService {
    places: AngularFireList<Place>;

    constructor(private db: AngularFireDatabase) {
        this.places = this.db.list('/places');
    }

    getPlaces(): Observable<Place[]> {
        return this.places.valueChanges();
    }

    getPlace(id: string): AngularFireObject<Place> {
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

    updatePlace(key: string, updatedFields: {}): void {
        this.places.update(key, updatedFields)
            .catch(error => this.handleError(error));
    }

    getCategories(): Observable<Category[]> {
        return this.db.list<Category>('/categories').valueChanges();
    }

    handleError(error): void {
        console.log(error);
    }
}
