class Map {

    init() {
        return L.map('map-container', {
            center: [1.290270, 103.851959],
            zoom: 12,
            maxZoom: 25
        });
    }

}

(async (map) => {
    var mapObj = map.init();

})(new Map());


