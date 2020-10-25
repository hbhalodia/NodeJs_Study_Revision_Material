var http = require('http');
var upper_case_variable = require('upper-case'); //including the upper-case package.


http.createServer(function (req, res) {


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(upper_case_variable.upperCase("Hello Hit How are you?"));
    res.end();

}).listen(8080);