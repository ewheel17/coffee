$(document).ready(function(){
  $("#dashboard-body").delay( 800 ).fadeIn( 400 );
});

$(document).ready(function(){
  $("#landing-body").delay( 800 ).fadeIn( 400 );
});

// Creates a Google Map centered in on SLC.
var map;
var infowindow;

function initMap() {
  var SLC = {lat: 40.765, lng: -111.841};

  map = new google.maps.Map(document.getElementById('map'), {
    center: SLC,
    zoom: 12
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: SLC,
    radius: 4000,
    keyword: ['coffee']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
    console.log(results.length);
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
