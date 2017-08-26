import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlacesModule } from './../places.module';
import { PlaceService } from '../shared/place.service';
import { Place } from '../place.model';

@Component({
    templateUrl: './place-details.component.html',
    styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit, OnDestroy {
    place: Place;
    private getPlaceSubscription;

    constructor(private placeService: PlaceService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getPlaceSubscription = this.placeService.getPlace(this.route.snapshot.params['id'])
            .subscribe(place => {
                this.place = place;
            });
    }

    save() {
        const obj = {
            $key: '',
            heading: 'Рилски манастир',
            imageUrl: 'http://www.dinita-tours.com/files/148397219523128.jpg',
            rating: 4,
            category: 'религия',
            location: { latitude: 42.134275, longitude: 23.340122 },
            map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.789763732796!2d23.33793281584806!3d42.133383779202774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aae2bf1d3ad519%3A0xe08b0af1b5c27722!2sRila+Monastery!5e0!3m2!1sen!2sbg!4v1503665942883" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            `,
            bodyText: `Рилският манастир е един от символите на България. Основан през 10 век от монаха Иван Рилски, днес той привлича посетители от цял свят с уникалната си архитектура и чудотворна сила. Намира се в сърцето на Рила планина, на 20км от град Рила. До него се стига по асфалтиран път.Рилският манастир ще ви очарова още от прага си. Многобройните стенописи, украсяващи фасадата му, ще накарат сърцето ви да забие силно от гордост и възхищение. Гледката на цялата тази красота на фона на величествената планина е неописуема.
            Виртуалната ни разходка започва от главната църква на манастира - "Света Богородица". Тя е пазителка на чудотворната икона на Божията майка, която има силата да изцелява. Особено впечатляващи са нейните орнаменти - 32 че­ти­ри­ъ­гъл­ни прег­рад­ки с мо­щи на све­тци. В гор­на­та й част има над­пис "Оди­гит­рия" (Пътеводителка). Иконата е подарена на манастира от сестрата на цар Иван Шиш­ман, известна като "Ма­ра бя­ла бъл­гар­ка", же­на на сул­тан Му­рад І (1319-1389г).
            Чудотворната светия се пази винаги заключена. Са­мо на го­ле­ми праз­ни­ци се изнася за тър­жес­т­ве­на ли­тия около стените на манастира. После се внася отново в църквата и игу­ме­нът от­с­луж­ва мо­ле­бен с во­дос­вет. След което мно­жес­т­во­то посетители ми­на­ват на пок­ло­не­ние пред ико­на­та и тя отново се заключва. В църквата може да видите и мощите на Свети Иван Рилски.`
        };
        this.placeService.savePlace(obj);

    }

    ngOnDestroy(): void {
        this.getPlaceSubscription.unsubscribe();
    }
}
