// Select a feature collection of 5 waterbodies and add a property by using map() method.

var fc = /* color: #d63000 */ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Polygon(
            [[[92.27197241955312, 22.703732934276665],
              [92.28501868420156, 22.70389129402749],
              [92.28673529797109, 22.710858941756317],
              [92.2705991285375, 22.711333995734517]]]),
        {
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[92.29806494885, 22.687579277920925],
              [92.30115485363515, 22.698982056603935],
              [92.28244376354726, 22.69803186129441]]]),
        {
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[92.25725286228706, 22.744829345201804],
              [92.27699392063667, 22.752586426690055],
              [92.26875417454292, 22.764458657605548],
              [92.25021474583198, 22.75749374059251]]]),
        {
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[92.29278676731636, 22.731372139142056],
              [92.30085485203315, 22.73026383961282],
              [92.29965322239448, 22.741029797700207],
              [92.29158513767769, 22.736913502057583]]]),
        {
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[92.26497762424995, 22.725672217317793],
              [92.27218740208198, 22.72583055168689],
              [92.26978414280464, 22.73596357007794],
              [92.26102941258003, 22.73279708248215]]]),
        {
          "system:index": "4"
        })]);
// Feature collections:
Map.centerObject(fc);
//Printing the result:
print(fc);

// Using map method to add a property:
var property = fc.map(function(ft){
  return ft.set("Class","Waterbody");
});

//Printing the result:
print(property);