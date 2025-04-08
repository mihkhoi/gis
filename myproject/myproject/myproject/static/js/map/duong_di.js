var map = L.map('map').setView([10.762622, 106.660172], 13); // Sài Gòn

// Tile layer giống Google Maps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Control tìm đường
var control = L.Routing.control({
    waypoints: [null, null], // Ban đầu chưa có điểm
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),
    showAlternatives: true,
    altLineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 5 }]
    }
}).addTo(map);

// Chọn điểm trên bản đồ
map.on('click', function (e) {
    var waypoints = control.getWaypoints();

    if (!waypoints[0].latLng) {
        waypoints[0] = L.Routing.waypoint(e.latlng);
    } else if (!waypoints[1].latLng) {
        waypoints[1] = L.Routing.waypoint(e.latlng);
    } else {
        waypoints = [L.Routing.waypoint(e.latlng), null];
    }

    control.setWaypoints(waypoints);
});
