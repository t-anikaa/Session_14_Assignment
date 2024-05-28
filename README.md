# Session_14_Assignment
**Q[1]: Select a feature collection of 5 waterbodies and add a property by using map() method. **

Ans: My script begins by centering the map on a `FeatureCollection` (fc) containing five waterbodies using `Map.centerObject(fc)`, providing a focused view of the features. I then print the original `FeatureCollection` to the console with `print(fc)`, allowing me to inspect the initial data. To add a new property to each feature, I employ the `map` method, iterating over each feature (ft) in the `FeatureCollection`. Within this mapping function, I use `ft.set("Class", "Waterbody")` to assign a new property called `"Class"` with the value `"Waterbody"`. This modification is stored in a new variable, `property`. Finally, the modified `FeatureCollection` is printed using `print(property)`, enabling verification that the `"Class"` property has been successfully added to each feature. This process illustrates how to enhance the features within a `FeatureCollection` by adding new properties through mapping in Google Earth Engine.


*   [GEE link](https://code.earthengine.google.com/5da48407173860aeb76fe07ac81140aa)
*   [Code link](https://github.com/t-anikaa/Session_14_Assignment/blob/main/Q%26A%5B1%5D.js)
![14 1](https://github.com/t-anikaa/Session_14_Assignment/assets/161161157/ea06b911-9101-40ac-a6c0-9372d63360e5)


**Q[2]: Map over a list and create a feature collection by passing null geometry to each element of that list **

Ans: My script begins by centering the map on a `FeatureCollection` named `Rivers` using `Map.centerObject(Rivers)` to focus on the specified features. I create a list of river names with `var list = ee.List(["Padma", "Meghna", "Karatoya", "Karnaphuli"])` and then use the `map` method to iterate over each element. For each element, I create an `ee.Feature` with a null geometry and assign it a `"Name"` property with the river name: `list.map(function(el) { return ee.Feature(null, {"Name": el}); })`. This returns a list of features.
I convert this list into a `FeatureCollection` with `var listFC = ee.FeatureCollection(rivers)`. Finally, I print the list of features using `print(rivers)` to inspect them. This script demonstrates mapping over a list of names, creating features with null geometries, and compiling them into a `FeatureCollection` in Google Earth Engine.


*   [GEE link](https://code.earthengine.google.com/c43117fa4e180e1f697b6bbc98514efc)
*   [Code link](https://github.com/t-anikaa/Session_14_Assignment/blob/main/Q%26A%5B2%5D.js)
![14 2](https://github.com/t-anikaa/Session_14_Assignment/assets/161161157/70f63c99-047f-4bf0-9d7d-df858b1cf2f9)



**Q[3]: Export the feature collection as CSV.**

Ans: For exporting, I used Export.table.toDrive to export the FeatureCollection as a CSV file. I specified the collection to export, provided a description, set the file format to CSV, and designated the Google Drive folder for the output file. This function configures the export and submits the task to Google Earth Engine for processing.
![14 3](https://github.com/t-anikaa/Session_14_Assignment/assets/161161157/0771eb52-7517-4176-9f6e-25f052bb17bc)
CSV file:[Name of rivers.csv](https://github.com/t-anikaa/Session_14_Assignment/files/15472087/Name.of.rivers.csv)


*   [GEE link]( https://code.earthengine.google.com/c78dc0b8dac2db96046b1856373a181c)
*   [Code link](https://github.com/t-anikaa/Session_14_Assignment/blob/main/Q%26A%5B3%5D.js)
  

