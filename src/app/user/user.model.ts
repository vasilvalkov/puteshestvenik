import { Place } from './../places/place.model';

export interface User {
    username: string;
    firstName: string;
    lastName: string;
    places: Place[];
    comments: Comment[];
    photoUrl: string;
    email: string;
}

export interface UserWithCredential extends User {
    password: string;
}
