export interface Location {
    latitude: number;
    longitude: number;
}

export interface Category {
    name: string;
}

export interface Place {
    $key: string;
    heading: string;
    imageUrl: string;
    thumbUrl: string;
    rating: number;
    category: string;
    location: Location;
    bodyText: string;
    voters: string[];
    comments: Comment[];
}
