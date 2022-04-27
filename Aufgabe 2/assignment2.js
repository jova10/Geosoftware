//Geosoftware SS22
//Author: Joaquin Valdez
//this script will show your location if its provided an show the coordinates on a textfield
"use strict";

var distances = new Array();

var x = document.getElementById("position");

/**
  * @function getLocation 
  * @desc function to get the Location of the user
  * @source https://www.w3schools.com/html/html5_geolocation.asp
  */

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

/**
  * @function showPosition
  * @desc function to show the Position of the user
  * @param position coordinates of the user
  * @source https://www.w3schools.com/html/html5_geolocation.asp
  */

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
           "<br>Longitude: " + position.coords.longitude;
  let location = new Array(position.coords.longitude, position.coords.latitude)
     location = new JSONConstructor(location, "Point")
     document.getElementById("location").innerHTML = JSON.stringify(location)
}

/**
  * @function showError 
  * @desc function to show out error if no location could be found
  * @param error
  * @source https://www.w3schools.com/html/html5_geolocation.asp
  */
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
}
 /**
  * @function JSONConstructor
  * @desc builds a JSON object 
  * @param {[[coordinates],[coordinates],..,[coordinates]]} array array for transformation
  * @param {string} type given GeoJSON object-type
  */
  function JSONConstructor(array, type) {
    this.type = type
    this.coordinates = array
}