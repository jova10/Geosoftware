//Geosoftware SS22
//Author: Joaquin Valdez
//this script will calculate the distance between a given point(point.js) and the predetermined cities(cities.js) which are also given as points.
"use strict";

// Creating a new 2d Array with Names of the cities and distance
var citiesDistance = [
    ["Köln", 0.0],
    ["Amsterdam", 0.0],
    ["Kassel", 0.0],
    ["Barcelona", 0.0],
    ["Tunis", 0.0],
    ["Kyoto", 0.0],
    ["Bucharest", 0.0],
    ["Graz", 0.0],
    ["Kairo", 0.0],
    ["Dublin", 0.0],
    ["Oslo", 0.0],
];

// Calculating the great-cirle distance between two points using the "haversine" forumla: https://www.movable-type.co.uk/scripts/latlong.html
function distances(){
for(var i = 0; i < cities.length; i++) {
    // Saving point as the first point for this formula
    var lat1 = point[1];
    var lon1 = point[0];
    // The Points from the cities-array will be used for the second point
    var lat2 = cities[i][1];
    var lon2 = cities[i][0];
    
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = Math.round((R * c / 1000) * 10) / 10; // Converting into kilometres and rounding to one decimal place
    // Saving the calculated distances in the given array citiesDistance
    citiesDistance[i][1] = d;
}
}
// Running the distance function to calculate the distance 
distances();
// Sorting the 2d citiesDistance array. We have to compare the second Column where the distances are saved. Used "https://stackoverflow.com/questions/16096872/how-to-sort-2-dimensional-array-by-column-value".
citiesDistance.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
// Textoutput in HTML of the sorted Array cititesDistance with row break
var result = "";
for(var i = 0; i < citiesDistance.length; i++) {
    result = result + citiesDistance[i][0] + ": " +  citiesDistance[i][1] + " km" + "<br />";
}
document.getElementById("result").innerHTML = result;

