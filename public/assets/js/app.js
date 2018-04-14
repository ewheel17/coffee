$(document).ready(function(){
  $("#dashboard-body").delay( 800 ).fadeIn( 400 );
});

$(document).ready(function(){
  $("#landing-body").delay( 800 ).fadeIn( 400 );
});

// Creates a Google Map centered in on SLC.
var map;
var infowindow;
var apiKey = 'AIzaSyCWVKhQawuJXf_PrAnh7orfwb2QjVqLFQU';

function initMap() {
  var SLC = {lat: 40.761552, lng: -111.885752};

  map = new google.maps.Map(document.getElementById('map'), {
    center: SLC,
    zoom: 13,
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6195a0"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "0"
                },
                {
                    "saturation": "0"
                },
                {
                    "color": "#f5f5f2"
                },
                {
                    "gamma": "1"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "-3"
                },
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#bae5ce"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fac9a9"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#787878"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#0a00ff"
                },
                {
                    "saturation": "-77"
                },
                {
                    "gamma": "0.57"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#43321e"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#ff6c00"
                },
                {
                    "lightness": "4"
                },
                {
                    "gamma": "0.75"
                },
                {
                    "saturation": "-68"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#eaf6f8"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c7eced"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-49"
                },
                {
                    "saturation": "-53"
                },
                {
                    "gamma": "0.79"
                }
            ]
        }
    ]
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
      console.log(results[i].name)
      $('#coffee-list').append(`<h3 id='${results[i].place_id}'>${results[i].name}</h3><p>Rating: ${results[i].rating} | Open: ${results[i].opening_hours.open_now}</p>
        <p>${results[i].vicinity}</p>`)
    }
    console.log(results);
  }
}

// function logResults(results,place){
//   $('#coffee-list').append(`<h3>${place.name}</h3><p>${place.vicinity}</p>`)
// }


function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
    animation: google.maps.Animation.DROP
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
