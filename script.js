class Map {

    init() {
        return L.map('map-container', {
            center: [1.290270, 103.851959],
            zoom: 12,
            maxZoom: 25
        });
    }

    createBaseLayer() {
        return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    }

    async createPinLayer() {

        const sgData = await this.fetchData();

        const pins = sgData.map( data => {
            const coords = [data.latitude, data.longitude];
            return this.createMarker(coords);
        })

        return L.layerGroup(pins);
    }

    createMarker(coords) {
        return L.marker(coords);
    }

    async fetchData() {
        const res = await fetch('singapore-listing.json').then( res => res.json())
        return res;
    }
}

(async (map) => {
    var mapObj = map.init();

    // Add base layer tile to map
    mapObj.addLayer(map.createBaseLayer());
    mapObj.addLayer(await map.createPinLayer());

})(new Map());


