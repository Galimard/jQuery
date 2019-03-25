
//snazzy maps
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.2841686, 104.2574041),
        scrollwheel: false,// New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    //---------------несколько маркеров----------------
    var neighborhoods = [
        {lat: 52.2841686, lng: 104.2574041, title: 'title1', icon: "i/map-pin.png"}//,
        // {lat: 52.2841686, lng: 104.2574041, title: 'title2', icon: "i/map-pin.png"}
    ]
    //
    // var markers = [];
    //
    // //маркеры падают с задержкой
    // function drop () {
    //     for(var i =0; i < neighborhoods.length; i++) {
    //         addMarkerWithTimeout(neighborhoods[i], i * 500);
    //     }
    // }
    //
    // function addMarkerWithTimeout(marker, timeout) {
    //     window.setTimeout(function () {
    //         markers.push(new google.maps.Marker({
    //             position: new google.maps.LatLng(marker["lat"], marker["lng"]),
    //             map: map,
    //             title: marker["title"],
    //             icon: {
    //                 url: "i/" + marker["icon"]
    //             },
    //             animation: google.maps.Animation.DROP
    //         }));
    //     }, timeout);
    // }
    //
    // drop();
    //---------------несколько маркеров-------------

    /* попап с подсказкой
   =========================*/
    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {

        // this variable sets the map bounds and zoom level according to markers position
        var bounds = new google.maps.LatLngBounds();

        // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
        for (var i = 0; i < neighborhoods.length; i++){

            var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
            var name = neighborhoods[i].title;
            var icon = neighborhoods[i].icon;
            var content = neighborhoods[i].content;

            createMarker(latlng, name, content, icon, i * 500);

            // Marker’s Lat. and Lng. values are added to bounds variable
            bounds.extend(latlng);
        }

    }


    function createMarker(latlng, title, content, icon, timeout) {

        window.setTimeout(function() {
            var marker = new google.maps.Marker({
                map: map,
                position: latlng,
                clickable: true,
                icon: {
                    url: "i/" + icon
                },
                animation: google.maps.Animation.DROP
            });

            google.maps.event.addListener(marker, 'click', function() {
                var infoContent = '<div id="info_container">' +
                    '<h3 class="info_title">' + title + '</h3><div>' + content + '</div></div>';

                infoWindow.setContent(infoContent);
                infoWindow.open(map, marker);

            });

        }, timeout);

    }

    displayMarkers();
    /* попап с подсказкой
  =========================*/

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(52.2841686, 104.2574041),
        map: map,
        title: 'MegaMir Forever!',
        icon: "i/map-pin.png"
    });

    // новая опция для карты - скролл карты при клике на нее
    map.addListener("click", function(){

        map.setOptions({
            scrollwheel: true
        });

    });

    map.addListener("drag", function(){

        map.setOptions({
            scrollwheel: true
        });

    });

    // новая опция для карты - скролл карты убирается, когда мышь уходит
    map.addListener("mouseout", function(){

        map.setOptions({
            scrollwheel: false
        });

    });

    //центр карты при ресайзе
    var getCenter = map.getCenter();

    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(getCenter);
    });
}