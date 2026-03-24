// write node script to fecth values from url and display output as ask
// "http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test & c3=welcome to LJU #Allthebest"
// 1.Data must be written in file exam.txt 
// File name must be fetch from url
// Output:Hello!
//        Welcome to LJU FSD2 T1 Test
//        #Allthebest
// 2. Read the content from file and send response to server and display data in "/" page in same formate but in h1 tag and in red color
// 3.If any other page is requested , it shows page not found in plain text.

var http = require("http");
var url = require("url");
var fs = require("fs");

var link = "http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=%23Allthebest";

var data = url.parse(link, true);


var filename = "exam.txt";

var content = data.query.c1 + "!\n" +
              "Welcome to LJU " + data.query.c2 + "\n" +
              data.query.c3;


fs.writeFileSync(filename, content);


http.createServer(function(req, res) {

    if (req.url == "/") {

        var fileData = fs.readFileSync(filename, "utf8");

        var lines = fileData.split("\n");
        var output = "";

        for (var i = 0; i < lines.length; i++) {
        output = output + "<h1 style='color:red'>" + lines[i] + "</h1>";
}

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(output);
        res.end();

    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Page Not Found");
        res.end();
    }

}).listen(3000);
