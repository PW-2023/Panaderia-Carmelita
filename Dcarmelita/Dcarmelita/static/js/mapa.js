var geocoder;
var map;

function initMap() {
    geocoder = new google.maps.Geocoder();
    var myLatLng = { lat: 0, lng: 0 }; // Coordenadas iniciales del mapa
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    // Llama a la función para obtener las coordenadas de la dirección
    obtenerCoordenadas("Calle Manuel Montt 1687, Temuco, Chile");
}

function obtenerCoordenadas(direccion) {
    geocoder.geocode({ address: direccion }, function (results, status) {
        if (status === "OK") {
            var latitud = results[0].geometry.location.lat();
            var longitud = results[0].geometry.location.lng();

            // Aquí tienes las coordenadas en forma numérica
            console.log("Latitud: " + latitud);
            console.log("Longitud: " + longitud);

            // Centra el mapa en las coordenadas obtenidas
            map.setCenter(results[0].geometry.location);

            // Agrega un marcador en las coordenadas obtenidas
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            console.error("Geocodificación inversa fallida: " + status);
        }
    });
}

// Carga asincrónica de la API de Google Maps sin el uso de libraries
function cargarAPI() {
    var script = document.createElement("script");
    script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ5RwKHLGPGeR_yVepSAN25W9DaRHBaos&callback=initMap";
    document.body.appendChild(script);
}

// Llama a la función para cargar la API de Google Maps
cargarAPI();