import { Injectable, OnInit, OnChanges } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PlaceService{
    places: FirebaseListObservable<any[]>;
    item: any;
    constructor(private db: AngularFireDatabase) { }

    getPlaces() {
        return this.db.list('/places');
    }

    getPlace(id: number) {
        this.item = this.db.object('/places', { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
        });
        return PLACES.find(place => place.id === id);
    }
}

const PLACES = [
    {
        id: 1,
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
    },
    {
        id: 2,
        heading: 'Царевец',
        imageUrl: 'https://i.ytimg.com/vi/Ctb530SGn5w/maxresdefault.jpg',
        rating: 3,
        category: 'история',
        location: { latitude: 43.160433, longitude: 23.800653 },
        bodyText: `Крепостта Царевец е синоним на величие, слава и богатство! Това е уникално място за среща с миналото на България и историята на нейните велики царе, които привличат десетки хиляди туристи всяка година. Крепостта се намира на едноименния хълм в старата част на Велико Търново, недалеч от центъра, и е превърната в архитектурно-музеен резерват.
        Ако искате да се почувствате като истински царе и принцеси, това е мястото! Още на входа ще имате възможност да се преобразите с царски одежди или рицарски доспехи. Всеки желаещ ще получи и снимка с величествения си лик. Услугата се заплаща.
        Най-голямата атракция на Царевец е нощният аудиовизуален спектакъл "Звук и светлина". На фона на драматична музика, безброй разноцветни светлини, лазери и църковни камбани разказват славната и трагична история на Второто българско царство (1185-1393г). Най-доброто място за наблюдение е от площад "Цар Иван Асен II", до главния вход. Гледката е неописуемо вълнуваща, затова трябва да я видите с очите си!`
    },
    {
        id: 3,
        heading: 'Хайдушки водопади',
        imageUrl: 'https://chateauslatina.files.wordpress.com/2014/07/img_15f17.jpg',
        rating: 4.3,
        category: 'природа',
        location: { latitude: 43.2066334, longitude: 23.05709 },
        bodyText: `"Хайдушки водопади" са няколко малки водопада с височина 2-3м. Намират се в рядко красивата долина на Голяма река, разположени на 9 км от града, където се събират водите на реките Ценкова, Сливашка и Средна бара. Спускайки се стремглаво, тук на известно разстояние те текат бавно и изведнъж с грохот се хвърлят от скалите между цепнатините и скочили, тутакси се хвърлят още веднъж и разбити на бяла пяна, се сливат, за да поемат към града.
        Неописуема е прелестта на това място край водопадите. На матово-зеления фон прекрасно хармонират покритите със сребристи лишеи и сладка папрат тъмни скали. Водопадите са няколко и са с височина 2-3м. Слязъл при водопадите, туристът изпитва чувството, че се намира в тайнствено, вълшебно място. Нагоре се издигат масивни гористи стени и се вижда малко пространство от небосвода, а долу цари дълбока тишина, нарушавана само от разбиващите се водни струи.`
    },
    {
        id: 4,
        heading: 'Лещен',
        imageUrl: 'https://www.bulgarianhistory.org/wp-content/uploads/2013/11/IMGP6870.jpg',
        rating: 3.1,
        category: 'село',
        location: { latitude: 41.6370359, longitude: 23.8259642 },
        bodyText: `Село Лещен е един от най-привлекателните и автентични курорти за селски туризъм в България. Разположено върху южния склон на Западните Родопи община Гърмен, пред него се открива незабравима гледка към Пирин планина.
        
        Петнадесет реставрирани стари къщи предлагат характерната за този край възрожденска атмосфера, съчетана с модерен комфорт. Къщите са с просторни чардаци, китни дворове и механи, в които гостите имат възможност да приготвят сами храната си с продукти от местното стопанство, макар че ресторанта е отдавна вече известен за любителите на добрата кухня дори и в чужбина.
        Целогодишно, домакините предлагат различни начини на забавления и отдих – риболов, излети в планината, плуване и балнеолечение в близкия курорт Огняново, бране на гъби и билки, разходки до съседните етнографски комплекси Ковачевица, Долен и Делчево, както и еднодневни пътувания до Роженския манастир край Мелник и известния ски-курорт Банско.`
    },
    {
        id: 5,
        heading: 'Пловдив',
        imageUrl: 'http://www.ploshtadslaveikov.com/wp-content/uploads/2014/08/Plovdiv41.jpg',
        rating: 4.2,
        category: 'град',
        location: { latitude: 42.1420258, longitude: 24.7286073 },
        bodyText: `Античният театър на Филипопол е един от най-добре запазените антични театри в света. Разположен е на южния склон на Трихълмието, в седловината между Таксим тепе и Джамбаз тепе. Разкрит от пловдивските археолози и възстановен в началото на 80-те години на XX в., Античният театър на Филипопол е сред най-значимите от времето на Римската империя.
        Наскоро отрит и разчетен надпис върху постамент за статуя посочва, че театърът е бил построен през 90-те години на I век сл. Хр., когато градоначалник на Филипопол е бил Тит Флавий Котис – потомък на тракийската царска династия, три пъти първожрец на провинция Тракия, съдебен представител на метрополията и отговорник за строежите.
        Откритото зрително пространство включва 28 концентрични реда мраморни седалки. Зрителните места обграждат сцената – орхестра, която е с форма на подкова и диаметър 26,64 м. Освен за театрални представления, се е използвал за гладиаторски и ловни игри и за седалище на Общото събрание на римската провинция Тракия (тракон коинон) . Бил е действащ до края на IV в. и е побирал около 6 000 зрители. Над сводестия проход на втория ранг седалки е имало ложа за императора и почетните лица.`
    },
    {
        id: 6,
        heading: 'Белоградчишки скали',
        imageUrl: 'http://detelinatours.com/wp/wp-content/uploads/2012/04/1imgp1754.jpg',
        rating: 4.9,
        category: 'природа',
        location: { latitude: 43.6115544, longitude: 22.6749314 },
        bodyText: `Белоградчишките скали с право могат да се нарекат 8-то чудо на света. Показателни са и думите на писателя Антон Страшимиров: "Пред фантастичните видения на Белоградчишките скали, човешката фантазия е ограбена, абсолютно ограбена с всички свои капризи!" Тези невероятни творения на природата се намират в района на град Белоградчик, в Западния Предбалкан. Простират се на близо 30км дълъг участък и се разделят на три групи – Фалковска, Централна и Збеговска.
        Над 200млн години са били необходими, за да се изваят чудните форми на Белоградчишките скали. Червеният им цвят се дължи на железните съединения в тях. Най-интересните образувания се намират в Централната част - Конникът, Мадоната, Дервишът, Метохът, Ученичката, Адам и Ева, Хайдут Велко, Кукувицата и други. Наименованията им произлизат от голямата им прилика с хора, животни или предмети. Много от тях са свързани и с легенди.`
    },
    {
        id: 7,
        heading: 'Вазова екопътека',
        imageUrl: 'http://www.ekopateki.info/common_images/articles/2101/20110225162716.jpg',
        rating: 4.4,
        category: 'екопътека',
        location: { latitude: 43.0353388, longitude: 23.3355909 },
        bodyText: `Самата екопътека има два края. Долният край се намира в близост до Гара Бов, на основния път има табела с обозначение за екопътеката. Горният край на екопътеката може да се достигне като се хване отклонението за село "Заселе" и след около 15 мин изкачване по стръмни завои с автомобил се стига до центъра на селцето, където също има обозначителна табела.
        Тя е частично обновена и реконструираният ѝ участък е официално открит на 19 април 2007г. Пътеката минава по долината на река Трескавец, пресича река Искър южно от Гара Бов, следва долината на река Скакля, край едноименния карстов извор, изкачва се край водопада и извежда до село Заселе. Пътят продължава до село Зимевица , покрай църквата "Св. Петка". Днес тя е туристическа дестинация с нарастваща популярност.`
    }
];