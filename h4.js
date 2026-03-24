var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if(req.url==='/'){
        res.writeHead(200,{ "Content-Type": "text/html"});
        res.end(`<h1>Hello</h1> <img src="download.jpg"/>`);
    }
    else if(req.url==='/download.jpg'){
        img=fs.readFileSync("download.jpg");
        res.writeHead(200,{ "Content-Type": "download/jpg"});
        res.end(img)
    }

    
    }).listen(8180);
    

