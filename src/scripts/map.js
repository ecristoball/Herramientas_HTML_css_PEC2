import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
var map = L.map('map', {
    	center: [42.81, -1.609],
     	zoom: 13
     });
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);