import { Injectable } from '@angular/core';

@Injectable()
export class PlaceService {

    getPlaces() {
        return PLACES;
    }

    getPlace(id: number) {
        return PLACES.find(place => place.id === id);
    }
}

const PLACES = [
    {
        id: 1,
        heading: 'Рилски манастир',
        imageUrl: 'http://www.dinita-tours.com/files/148397219523128.jpg'
    },
    {
        id: 2,
        heading: 'Царевец',
        imageUrl: 'https://i.ytimg.com/vi/Ctb530SGn5w/maxresdefault.jpg'
    },
    {
        id: 3,
        heading: 'Хайдушки водопади',
        imageUrl: 'https://chateauslatina.files.wordpress.com/2014/07/img_15f17.jpg'
    },
    {
        id: 4,
        heading: 'Лещен',
        imageUrl: 'https://www.bulgarianhistory.org/wp-content/uploads/2013/11/IMGP6870.jpg'
    },
    {
        id: 5,
        heading: 'Пловдив',
        imageUrl: 'http://www.ploshtadslaveikov.com/wp-content/uploads/2014/08/Plovdiv41.jpg'
    },
    {
        id: 6,
        heading: 'Белоградчишки скали',
        imageUrl: 'http://detelinatours.com/wp/wp-content/uploads/2012/04/1imgp1754.jpg'
    },
    {
        id: 7,
        heading: 'Вазова екопътека',
        imageUrl: 'http://www.ekopateki.info/common_images/articles/2101/20110225162716.jpg'
    }
];
