$(document).ready(function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FudGR1dGNodGhpcyIsImEiOiI1NkVyQUFjIn0.jJ_k-m_D11QLgBGUU0M-jQ';
    var map1 = new mapboxgl.Map({
        container: 'map1', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: [4.912933, 52.352346], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
    map1.on('load', function(){
        map1.loadImage('satRdayLogo-small.png', function(error, image) {
            if (error) throw error;
            map1.addImage('cat', image);
            map1.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [4.912933, 52.352346]
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "cat",
                    "icon-size": 0.25
                }
            });
        });
    })


    var map2 = new mapboxgl.Map({
        container: 'map2', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
        center: [4.914647, 52.348441], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
    map2.on('load', function(){
        map2.loadImage('satRdayLogo-small.png', function(error, image) {
            if (error) throw error;
            map2.addImage('cat', image);
            map2.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [4.914647, 52.348441]
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "cat",
                    "icon-size": 0.25
                }
            });
        });
    })
})