// Crear el mapa centrado en Nicaragua
var map = L.map('map').setView([12.8654, -85.2072], 7);  // Coordenadas de Nicaragua

// Agregar la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Diccionario de iconos según el cultivo
var cropIcons = {
    "cacao": L.icon({
        iconUrl: 'icons/cacao.png',      // Asegúrate de tener un archivo cacao.png en la carpeta icons
        iconSize: [32, 32],              // Tamaño del ícono
        iconAnchor: [16, 32],            // Punto de anclaje del ícono
        popupAnchor: [0, -32]            // Punto donde aparece el popup
    }),
    "arroz": L.icon({
        iconUrl: 'icons/arroz.png',      // Ícono de arroz
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    }),
    "maiz": L.icon({
        iconUrl: 'icons/maiz.png',       // Ícono de maíz
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    }),
    "frijoles": L.icon({
        iconUrl: 'icons/frijoles.png',   // Ícono de frijoles
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    }),
    "sorgo": L.icon({
        iconUrl: 'icons/sorgo.png',      // Ícono de sorgo
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    })
};

// Función para cargar datos GeoJSON y mostrar puntos
function loadGeoJson(cropType) {
    fetch(`data/${cropType}.geojson`)
        .then(response => response.json())
        .then(data => {
            // Limpiar el mapa de capas anteriores
            if (geojsonLayer) {
                map.removeLayer(geojsonLayer);
            }

            // Agregar nueva capa con los puntos de cultivo
            geojsonLayer = L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, {
                        icon: cropIcons[cropType]  // Ícono personalizado según el cultivo
                    });
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup(feature.properties.name);
                    }
                }
            }).addTo(map);
        })
        .catch(err => {
            console.error("Error al cargar los datos GeoJSON:", err);
        });
}

var geojsonLayer;

// Evento para cambiar el cultivo según la selección
document.getElementById('cropType').addEventListener('change', function() {
    var selectedCrop = this.value;
    loadGeoJson(selectedCrop);
});

// Cargar los datos iniciales (cacao por defecto)
loadGeoJson('cacao');
