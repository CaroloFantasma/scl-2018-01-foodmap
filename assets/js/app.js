// const splashTime = 3;
// const urlMenu = 'file:///C:/Users/CaroloFantasma/Documents/scl-2018-01-foodmap/assets/mainIndex.html';
// setTimeout("window.location = '" + urlMenu + "'", splashTime * 1000);

// Función para que aparezca el mapa de Google
function initMap() {
  let locationMap = { lat: -33.400, lng: -70.600 };
  let map = new google.maps.Map(
    document.getElementById('mapContainer'), { zoom: 15, center: locationMap });
  let markerPosition = new google.maps.Marker({ position: locationMap, map: map });
}

// Obtener ubicación (geolocalización)
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapContainer'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
     'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('mapContainer'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}