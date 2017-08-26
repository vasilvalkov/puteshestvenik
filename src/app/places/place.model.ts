export interface Location {
    latitude: number;
    longitude: number;
}

export interface Place {
    $key: string;
    heading: string;
    imageUrl: string;
    rating: number;
    category: string;
    location: Location;
    bodyText: string;
}
