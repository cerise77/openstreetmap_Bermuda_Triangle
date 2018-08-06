// Code goes here
var btn = document.getElementById('but');
btn.addEventListener('click', func);

var btn1 = document.getElementById('but1');


function func() {
  const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 1
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    foo: 'bar'
  }).addTo(map);
  //const layerGroup = L.featureGroup().addTo(map);
  //latLngData.forEach(latLngs => L.polyline(latLngs).addTo(layerGroup));


  var latlngs = [[25.7906500, -80.1300500],[32.7, -64.46],[18.24829, -66.49989]];
  var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
  // zoom the map to the polygon
  map.fitBounds(polygon.getBounds());


  //polygon.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();


  var popup = L.popup();

  function onMapClick(e) {
      popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
  }

  polygon.on('click', onMapClick);

  btn.style.display = 'none';
  btn1.style.display = 'none';
}




// 1. Добавить возможность выбора между OpenStreet и Google картами
// 2. Выделить на карте бермудский треугольник (любым способом)
// 3. При нажатии на линию, показывать popup с общей длинной текущей линии
// Работа с DOM только через Leaflet
