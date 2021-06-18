var defaultLocation = [43.232758, 5.443098];
var mymap = L.map('mapid').setView(defaultLocation, 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiYml6Ym96YnV6IiwiYSI6ImNrcHkwcDZpODAxMTkyb3N4NnUwbTQ3NzQifQ.NQdFgqDEUS93ajNXckoOpg'  // à compléter 
}).addTo(mymap);

var marker = L.marker(defaultLocation).addTo(mymap);
var circle = L.circle(defaultLocation, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(mymap);


var clickedLat = defaultLocation[0];
var clickedLong = defaultLocation[1];

function onMapClick(e) {
	marker
		.setLatLng(e.latlng)
		.addTo(mymap);
	circle
		.setLatLng(e.latlng)
		.addTo(mymap);
	clickedLat = e.latlng.lat;
	clickedLong = e.latlng.lng;

	// api search
	loadClient().then(execute);
}

mymap.on('click', onMapClick);