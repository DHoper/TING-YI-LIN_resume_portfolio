
var map;
var InforObj = [];

/* map deafult Coordinates loaction */
var centerCords = {
    // lat: -25.344,
    lat: 40.940158512491735,
    lng: 131.036
};
var markersOnMap = [
    // 印度
    {
        virusNum: "B.617.2//",
        virusName: "Delta",
        virusLocation: "印度",
        virusContent: "Beijing Station W St, Dongcheng Qu, Beijing Shi, China, 100021",
        LatLng: [{
            lat: 22.940158512491735,
            lng: 79.70995021888635
        }]
    },
    // 巴西
    {
        virusNum: "P.1//",
        virusName: "Gamma",
        virusLocation: "巴西",
        virusContent: "3015 St Charles St Ste. B",
        LatLng: [{
            lat: -8.510013450198832,
            lng: -52.434523278800185
        }]
    },
];



function addMarker() {
    var image = {
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
        labelOrigin: new google.maps.Point(0, 42)
    };

    /* Create markers loop */
    for (var i = 0; i < markersOnMap.length; i++) {
        /* A. Create html data for the markers */
        var contentString =
            '<div id="content">' +
            '<label>' + markersOnMap[i].virusNum + '</label>' +
            '<h2>' + markersOnMap[i].virusName + '</h2>' +
            '<p>' + markersOnMap[i].virusContent + '</p>' +
            '</div>';

        /* B. generate markers position and label */
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            map: map,
            label: {
                text: markersOnMap[i].virusLocation,
                color: "white",
                fontSize: "17px"
            },
            icon: 'none'
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click", function () {
            closeOtherInfo();
            infowindow.open(marker.get("map"), marker);
            InforObj[0] = infowindow;
        });

        google.maps.event.addListener(map, "click", function (event) {
            infowindow.close();
        });
    } /* end marker loop */
}

function closeOtherInfo() {
    if (InforObj.length > 0) {
        /* detach the info-window from the marker ... undocumented in the API docs */
        InforObj[0].set("marker", null);
        /* and close it */
        InforObj[0].close();
        /* blank the array */
        InforObj.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        restriction: {
            latLngBounds: {
                north: 85,
                south: -85,
                west: -180,
                east: 180
            }
        },
        zoom: 2.5,
        maxZoom: 4,
        minZoom: 2.5,
        disableDefaultUI: true, // a way to quickly hide all controls
        center: centerCords,
        // backgroundColor: 'hsla(0, 0%, 0%, 0)',
        // backgroundColor: '#212121',
        backgroundColor: '#000',
        // fullScreenControl: false,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#757575"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8a8a8a"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#373737"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3c3c3c"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4e4e4e"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3d3d3d"
                }]
            }
        ]
    });

    addMarker();
}

window.onload = function () {
    setTimeout(() => {
        initMap();
    }, 3000)
};