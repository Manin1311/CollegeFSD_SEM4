var fs = require("fs");
var url = require("url");

var urlString = "http://localhost:8080/default.html?name=xyz&age=30";


var parsedUrl = url.parse(urlString, true);

var queryData = parsedUrl.query;

var queryString = JSON.stringify(queryData);

fs.writeFile("url.txt", queryString, function(err) {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("Query string written successfully!");
    }
});