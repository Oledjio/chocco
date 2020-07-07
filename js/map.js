let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753215, 37.604915],
        zoom: 13,
        controls: []
    });

    const coords = [
        [55.744389, 37.580712],
        [55.757154, 37.587865],
        [55.750524, 37.597154],
        [55.758960, 37.612323]
    ];

    const myCollection  = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: '/img/icons/marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52],
    });

    for (let i = 0; i<coords.length; i++){
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);