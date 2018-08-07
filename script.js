// Code goes here
const map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 1
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar'
}).addTo(map);
//const layerGroup = L.featureGroup().addTo(map);
//latLngData.forEach(latLngs => L.polyline(latLngs).addTo(layerGroup));


var coords = [[25.7906500, -80.1300500],[32.7, -64.46],[18.24829, -66.49989],[25.7906500, -80.1300500]];



  var polyline = L.polyline(coords, {color: 'blue'}).addTo(map);
  var previousPoint;


  polyline.getLatLngs().forEach(function (latLng) {
    if (previousPoint) {
      L.marker(latLng).bindPopup('Distance from previous point: ' + previousPoint.distanceTo(latLng).toFixed(2) + ' meters').addTo(map);
    }
    previousPoint = latLng;
  });



  L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
      var img = L.DomUtil.create('img');

      img.src = '../plunk/googleM.jpg';
      img.style.width = '40px';
      img.style.marginBottom = '50px';
      img.style.cursor = 'pointer';

      return img;
  },

  onRemove: function(map) {

  }
  });

  L.control.watermark = function(opts) {
      return new L.Control.Watermark(opts);
  }

  L.control.watermark({ position: 'bottomleft'}).addTo(map);



// 1. Добавить возможность выбора между OpenStreet и Google картами
// 2. Выделить на карте бермудский треугольник (любым способом)
// 3. При нажатии на линию, показывать popup с общей длинной текущей линии
// Работа с DOM только через Leaflet
