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


    
    var customIcon = L.icon({
        iconUrl: './icono_map.png', // Reemplaza con la ruta de tu icono
        iconSize: [32, 32], // Tamaño del icono
        iconAnchor: [16, 32], // Ancla del icono, dónde se coloca sobre el marcador (ajusta según el icono)
        popupAnchor: [0, -32] // Ubicación del popup con respecto al icono
    });
    



// marcadores
const markers = [
    { coords: [42.817303321276306, -1.6427753353354069], popupText: 'Plaza del Castillo' },
   
];

// Añadir cada marcador al mapa
markers.forEach(({ coords, popupText }) => {
    
    L.marker(coords, { icon: customIcon }).addTo(map)
      .bindPopup(popupText); // Añadir un popup al marcador
});
