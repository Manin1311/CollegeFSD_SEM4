var http = require("http");

http.createServer(function(req, res) {

    // JSON object
    var data = {
        name: "Manin",
        age: 20,
        city: "Ahmedabad"
    };

    
    res.writeHead(200, { "Content-Type": "application/json" });

    
    res.write(JSON.stringify(data));

    res.end();

}).listen(3120);

console.log("Server running at http://localhost:3120");