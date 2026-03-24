// Average of 3 numbers using query parameters

var u = require("url");

var urlString = "http://localhost:8080/test?m1=50&m2=60&m3=70";

// Parse URL
var parseUrl = u.parse(urlString, true);


var m1 = parseInt(parseUrl.query.m1);
var m2 = parseInt(parseUrl.query.m2);
var m3 = parseInt(parseUrl.query.m3);

// Calculate average
var avg = (m1 + m2 + m3) / 3;


console.log("Marks:", m1, m2, m3);
console.log("Average:", avg);