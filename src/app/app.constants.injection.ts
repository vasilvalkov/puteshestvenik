import { UserWithCredential } from './user/user.model';
import { InjectionToken } from '@angular/core';

export const AppConstantInjectionToken = new InjectionToken('app-config');

export interface AppConstants {
    routes: {
        LOGIN: string;
        REGISTER: string;
        PLACES: string;
        PLACE_CREATE: string;
        USER: string;
        PROFILE: string;
    };
    storageRefs: {
        PLACES: string;
        USERS: string;
        CATEGORIES: string;
        [key: string]: string;
    };
    validation: {
        [key: string]: any;
    };
    default: {
        DATE_FORMAT: string;
        USER_WITH_CREDENTIAL: UserWithCredential
    };
}


