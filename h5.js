// create one page with 2 links /Home , /About, both pages must contain relevent html type content if user add any other url path
// then it will be redirected to the page which shows plain msg "page not found
// 
var h=require("http"); 
var server=h.createServer( 
    function(req,res) 
    {    
        if(req.url=="/") 
        { 
            res.writeHead(200,{"content-type":"text/html"}); 
            res.write("<h1> Home page </h1><div><ul><li><a href='/'>Home</a></li><li><a href='/about'>About</a></li></ul>"); 
            res.end(); 
        } 
        else if(req.url=="/about") 
        { 
            res.writeHead(200,{"content-type":"text/html"}); 
            res.write("<h1> About Page </h1>"); 
            res.end(); 
        } 
        else  
        { 
            res.writeHead(404,{"content-type":"text/plain"}); 
            res.end("Page not found"); 
         
         
             
        } 
    }); 
server.listen(8081); 