// Histogram Visualisation
var vg_1 = "hw10_histogram.json";

vegaEmbed("#histogram", vg_1).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);


// Dot Map Visualisation
var vg_2 = "hw10_map.json";

vegaEmbed("#dot_map", vg_2).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);