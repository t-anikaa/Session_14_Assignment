// Map over a list and create a feature collection by passing null geometry to each 
// element of that list 

var Rivers = /* color: #d63000 */ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Polygon(
            [[[90.78741479085893, 22.564635044988265],
              [90.94671654867143, 22.525316427334264],
              [90.96044945882768, 22.620422866484283],
              [90.79153466390581, 22.6394362730202]]]),
        {
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[92.23593554155235, 22.698176543034943],
              [92.3100932563961, 22.681071918644633],
              [92.31215319291954, 22.732379383924428],
              [92.25996813432579, 22.73364599163078]]]),
        {
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[88.57935369252691, 24.283871792286952],
              [88.72629583119878, 24.270101455316997],
              [88.75101506948003, 24.390228550364487],
              [88.59034002065191, 24.342691860683217]]]),
        {
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[89.37856079430291, 24.84649892669794],
              [89.37896849007318, 24.84659628406298],
              [89.37808872551629, 24.84765747437365],
              [89.37774540276239, 24.84763800307377]]]),
        {
          "system:index": "3"
        })]);
Map.centerObject(Rivers);
// List of rivers:
var  list = ee.List(["Padma","Meghna","Karatoya","Karnaphuli"]);
// Applying map method:
var rivers = list.map(function(el){
  return ee.Feature(null,{"Name":el});
});
// Converting features into featurecollection:
var listFC = ee.FeatureCollection(rivers);
// printing the result:
print(rivers);
