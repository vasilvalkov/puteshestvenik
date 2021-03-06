import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { AppConstantInjectionToken, AppConstants } from './../../app.constants.injection';
import { Category, Place } from '../../places/place.model';

@Injectable()
export class PlaceService {
    places: AngularFireList<Place>;

    constructor(
        private db: AngularFireDatabase,
        @Inject(AppConstantInjectionToken) private app_constants: AppConstants
    ) {
        this.places = this.db.list(app_constants.storageRefs.PLACES);
    }

    getPlaces(): Observable<Place[]> {
        return this.places.valueChanges();
    }

    getPlace(id: string): AngularFireObject<Place> {
        return this.db.object(`${this.app_constants.storageRefs.PLACES}/${id}`);
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
        return this.db.list<Category>(this.app_constants.storageRefs.CATEGORIES).valueChanges();
    }

    handleError(error): void {
        console.log(error);
    }
}
