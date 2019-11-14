var myChart = echarts.init(document.getElementById('earth'));
$.getJSON('earth/flights.json', function(data) {


  function getAirportCoord(idx) {
    return [data.airports[idx][3], data.airports[idx][4]];
  }
  var routes = data.routes.map(function(airline) {
    return [
      getAirportCoord(airline[1]),
      getAirportCoord(airline[2])
    ];
  });
  var airports = data.airports.map(function(item) {
    return {
    coord: [item[3], item[4]]
    }
  });
  var routesGroupByAirline = {};
  data.routes.forEach(function(route) {
    var airline = data.airlines[route[0]];
    var airlineName = airline[0];
    if(!routesGroupByAirline[airlineName]) {
    routesGroupByAirline[airlineName] = [];
    }
    routesGroupByAirline[airlineName].push(route);
  });


  var pointsData = [];
  data.routes.forEach(function(airline) {
    pointsData.push(getAirportCoord(airline[1]));
    pointsData.push(getAirportCoord(airline[2]));
  });


  var series = data.airlines.map(function(airline) {
    var airlineName = airline[0];
    var routes = routesGroupByAirline[airlineName];


    if(!routes) {
    return null;
    }
    return {
    type: 'lines3D',
    name: airlineName,


    effect: {
    show: true,
    trailWidth: 2,
    trailLength: 0.15,
    trailOpacity: 1,
    trailColor: 'rgb(30, 30, 60)'
    },


    lineStyle: {
    width: 1,
    color: 'rgb(50, 50, 150)',
    // color: 'rgb(118, 233, 241)',
    opacity: 0.1
    },
    blendMode: 'lighter',


    data: routes.map(function(item) {
      return [airports[item[1]].coord, airports[item[2]].coord];
      })
    };
  }).filter(function(series) {
    return !!series;
  });


  myChart.setOption({
    backgroundColor: 'none',
    globe: {
    baseTexture: 'img/world.topo.bathy.2004011.jpg',
    heightTexture: 'img/bathymetry_bw_composite_4k.jpg',
    shading: 'lambert',

    //控制地球大小
    viewControl: {
    alpha: 10,
    beta: 160,
    // targetCoord: [116.46, 39.92],
    autoRotate: true,
    autoRotateAfterStill: 10,
    distance: 200
    },
    light: {
    ambient: {
    intensity: 0.4
    },
    main: {
    intensity: 0.4
    }
    },


    },


    series: {
    type: 'lines3D',


    coordinateSystem: 'globe',


    blendMode: 'lighter',


    lineStyle: {
    width: 1,
    color: 'rgb(255, 81, 97)',
    opacity: 0.1
    },


    data: routes
    }
  });
});