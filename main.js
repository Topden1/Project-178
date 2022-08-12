let latitude=22.7868542, longtitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VmaWFhc2hyYWYiLCJhIjoiY2w2cXF3N2p5MGN5bzNjbjJ1bHY5ZnE5ayJ9.T6rS_zkXvHTK-xrUtyzdsg';

var map = newmapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longtitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirection({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

