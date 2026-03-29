
const map = L.map('map').setView([50.1863, 15.0413], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);


L.geoJSON(floodData, {
    style: { color: '#0077ff', weight: 1, fillOpacity: 0.4 }
}).addTo(map);

L.geoJSON(floodData2, {
    style: {color: '#ac2929', weight: 1, fillOpacity: 0.4}
})