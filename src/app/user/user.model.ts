import { Place } from './../places/place.model';

export interface User {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    places: Place[];
    comments: Comment[];
}
