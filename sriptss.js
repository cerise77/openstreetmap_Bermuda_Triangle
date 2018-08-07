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

    //for (var i = 0; i < 3; i += 1) {
      //coords.push(getRandomLatLng());
    //}

    var polyline = L.polyline(coords, {color: 'blue'}).addTo(map);
    var previousPoint;

    //var popup = L.popup();


    // http://leafletjs.com/reference.html#polyline-getlatlngs
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
        // Nothing to do here
    }
    });

    L.control.watermark = function(opts) {
        return new L.Control.Watermark(opts);
    }

    L.control.watermark({ position: 'bottomleft'}).addTo(map);



    /*function onMapClick(e) {

        if (previousPoint) {
          //L.marker(latLng).bindPopup('Distance from previous point: ' + previousPoint.distanceTo(latLng).toFixed(2) + ' meters').addTo(map);
          popup
          //.setLatLng(latLng)
          .getLatLngs(e.latLng)
          //.setContent('Distance from previous point: ' + previousPoint.distanceTo(e.latLng).toFixed(2) + ' meters')
          //.openOn(map);
          L.marker(latLng).bindPopup('Distance from previous point: ' + previousPoint.distanceTo(latLng).toFixed(2) + ' meters').addTo(map);
        }
        previousPoint = e.latLng;

    }

    polyline.on('click', onMapClick);*/


    /*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);*/

    /*function getRandomLatLng() {
      return [
        48.8 + 0.1 * Math.random(),
        2.25 + 0.2 * Math.random()
      ];
    }*/

  //polygon.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();


  /*var popup = L.popup();

  function onMapClick(e) {
      popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
  }

  polygon.on('click', onMapClick);*/

  /*btn.style.display = 'none';
  btn1.style.display = 'none';*/





// 1. Добавить возможность выбора между OpenStreet и Google картами
// 2. Выделить на карте бермудский треугольник (любым способом)
// 3. При нажатии на линию, показывать popup с общей длинной текущей линии
// Работа с DOM только через Leaflet
