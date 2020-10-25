var http = require('http');
//Desription of the File had been done in File myfirstnodejs.js file from line number 7.
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();

}).listen(8080);