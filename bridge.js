var vg_1 = "choropleth_map"; 
var vg_2 = "dot_choropleth_map"
var vg_3 = "line_chart"
vegaEmbed("#Choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

vegaEmbed("#Dot_choropleth_map", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);

vegaEmbed("#Line_chart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);