



//Dash Fade In
$(document).ready(() => {
    $("#dashboard-body").fadeIn(800);
    $("#dashboard-header").attr("max-height", "400");
  });

  // Snackbar
  $('#snackbar').mouseenter(() => {
    $("#snackbar-hover").slideDown(600);
  });

  $('#snackbar').mouseleave(() => {
    $("#snackbar-hover").slideUp(600);
  });

  $('#close-snackbar').on('click', () => {
    var element = $("#snackbar");
    UIkit.alert(element).close();
  })

  $('#coffee-display').hide();


  // Creates a Google Map centered in on SLC.
  var map;
  var infowindow;
  var apiKey = 'AIzaSyCWVKhQawuJXf_PrAnh7orfwb2QjVqLFQU';
  var centerlat = 40.761552;
  var centerlng = -111.885752;
  var theZoom = 13;
  var theRadius = 13 * 300;

  $('#search-dash').on('click', () => {
    $(".coffee-wrapper-dash").fadeIn();
  });

  $('#search').on('click', () => {
    var position = $("#sign-up-section").offset().top -50;
    $('html, body').animate({
      scrollTop: position
    }, 400, () => {
      $("#sign-up-section").fadeOut();
      $("#card-section").fadeOut();
      $("#coffee-display").fadeIn();
    });

      var address = $("#address-input").val().trim();

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyB5EXA2BJmcchE6c3DQ0fFK7nyyja5i2co",
        "method": "POST"
      }

      $.ajax(settings).done(response => {
        centerlat = response.results[0].geometry.location.lat;
        centerlng = response.results[0].geometry.location.lng;
        $('#coffee-list').html("");
        initMap()

      });


    });


  // Initializes the Map display.
  function initMap() {
    var place = {lat: centerlat, lng: centerlng};
    map = new google.maps.Map(document.getElementById('map'), {
      center: place,
      zoom: theZoom,
      styles: [
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#666666"
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f1e4"
              },
              {
                  "saturation": "-51"
              }
          ]
      },
      {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f2f1e4"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f1ced4"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#b9e4a6"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#dfdfdf"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "saturation": "0"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#dfdfdf"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f4f4f4"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#dfdfdf"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#dfdfdf"
              }
          ]
      },
      {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#cfb2db"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#a0def9"
              }
          ]
      }
  ]
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: place,
      radius: theRadius,
      keyword: ['local', 'coffee', 'shops']
    }, callback);

    // Changes lat-lng and ultimately the radius based on User zooming.
    google.maps.event.addListener(map, "zoom_changed", () => {
        var bounds = map.getBounds();
        theRadius = (getDistanceFromLatLonInKm(bounds.b.b, bounds.f.b, bounds.b.f, bounds.f.f) * 1000) / 6;
    });


  }

  // Loops through the google maps array to generate the requested markers.
  var currentList = [];
  function callback(results, status) {
    var openClose;
    currentList = [];

    if (status === google.maps.places.PlacesServiceStatus.OK) {
      $("#coffee-list").html("");
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        currentList.push(results[i]);

        $("#coffee-list").append(`<a class="coffeeListSelect" id='${results[i].place_id}'><h3>${results[i].name}</h3></a><p>Rating: ${results[i].rating} | ${openClose}</p>
          <p>${results[i].vicinity}</p>`);
      }
    }

    // When a list item is clicked, the description appears above the associated marker.
    $(".coffeeListSelect").on("mouseover", event => {
      var elementPos = currentList.map(x => {return x.place_id; }).indexOf(event.currentTarget.id);
      var objectFound = currentList[elementPos];
      createMarker(objectFound, true);
    });
  }

  // Creates a marker at an inputed location pulled from the google maps search.
  function createMarker(place, listClick) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name
    });

    if (listClick) {
        infowindow.setContent(`<h3>${place.name}</h3><p>Rating: ${place.rating}<br />${place.vicinity}</p>` + `<div><img src="${place.photos[0].getUrl({ maxWidth: 150 })}"</div>`);
        infowindow.open(map, marker);
        return;
    }

    google.maps.event.addListener(marker, "mouseover", () => {
        infowindow.setContent(`<h3>${place.name}</h3><p>Rating: ${place.rating}<br />${place.vicinity}</p>` + `<div><img src="${place.photos[0].getUrl({ maxWidth: 150 })}"</div>`);
        infowindow.open(map, marker);
    });  

    google.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close(map, marker);
    });  
 
  }

  // Changes the saved center and zoom variables based on the User changes.
  function changeCenter() {
      centerlat = map.getCenter().lat();
      centerlng = map.getCenter().lng();
      theZoom = map.getZoom();
  }


  /********* Refresh Search Button *********/
  $('#refresh-button').on('click', () => {
    changeCenter();
    initMap();
  })


  // Determines distance based on Lat-Lng of viewport.
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
