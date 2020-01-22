import { InjectionToken } from '@angular/core';

export const AppConstantInjectionToken = new InjectionToken('app-config');
export const DecimalPlacesInjectionToken = new InjectionToken('app-decimal-places');
export const DashboardViewDecimalPlacesInjectionToken = new InjectionToken('app-dashboard-view-decimal-places');
export const ButtonNamesInjectionToken = new InjectionToken('app-button-names');

export interface AppConstants {
    routes: {
        LOGIN: string;
        REGISTER: string;
        PLACES: string;
        USER: string;
    };
    apiEndpoints: {
        [key: string]: string | any;
    };
}


