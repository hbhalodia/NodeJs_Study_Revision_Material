var http = require('http');
var url = require('url'); //import the URL module.x 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query; // 
    
    var txt = q.year + " " + q.month;  // Year and month are name given in the query part 
    //For eg : URL is : http://localhost:8080/?year=2019&month=2 

    res.end(txt);

}).listen(8080);