// const splashTime = 3;
// const urlMenu = 'file:///C:/Users/CaroloFantasma/Documents/scl-2018-01-foodmap/assets/mainIndex.html';
// setTimeout("window.location = '" + urlMenu + "'", splashTime * 1000);

function initMap() {
  let locationMap = { lat: -33.4569, lng: -70.648 };
  let map = new google.maps.Map(
    document.getElementById('mapContainer'), { zoom: 15, center: locationMap });
  let markerPosition = new google.maps.Marker({ position: locationMap, map: map });
}