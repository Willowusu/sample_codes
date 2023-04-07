//This code is used to calculate the distance between 2 points using the longitude and latitude using the haversine formula
var haversine = require("haversine-distance");

//First point in your haversine calculation
var point1 = { lat: 59.3293371, lng: 13.4877472 };

//Second point in your haversine calculation
var point2 = { lat: 59.3225525, lng: 13.4619422 };

var haversine_m = haversine(point1, point2); //Results in meters (default)
var haversine_km = haversine_m / 1000; //Results in kilometers

console.log("distance (in meters): " + haversine_m + "m");
console.log("distance (in kilometers): " + haversine_km + "km");
