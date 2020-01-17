export interface Location {
    latitude: number;
    longitude: number;
}

export interface Category {
    name: string;
}

export interface Place {
    id: string;
    heading: string;
    imageUrl: string;
    thumbUrl: string;
    rating: number;
    category: string;
    location: Location;
    bodyText: string;
    voters: string[];
    comments: Comment[];
    map: string;
}
