const splashTime = 3;
const urlMenu = 'file:///C:/Users/CaroloFantasma/Documents/scl-2018-01-foodmap/assets/mainIndex.html';
setTimeout("window.location = '" + urlMenu + "'", splashTime * 1000);

function placesSearch (platform) {
  var placesService= platform.getPlacesService(),
    parameters = {
      at: '37.7942,-122.4070',
      q: 'restaurant'};

  placesService.search(parameters,
    function (result) {
      alert(result);
    }, function (error) {
      alert(error);
    });
}