$(document).ready(function(){
  $("#dashboard-body").delay( 800 ).fadeIn( 400 );
});

$(document).ready(function(){
  $("#landing-body").delay( 800 ).fadeIn( 400 );
});

// Creates a Google Map
function initMap() {
  var uluru = { lat: 40.76, lng: -111.891 };
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
  });
  var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
}
