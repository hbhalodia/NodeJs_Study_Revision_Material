var http_server = require('http');  //impoirt HTTP server
var file_system = require('fs'); //import File system module
var url_query = require('url'); //import URL module

http_server.createServer(function(req,res){

    
    //parsing the url pased and taking into the object and then takking out path
    var parse_url = url_query.parse(req.url,true);  //in parse function inside it would be same name of url
    //converrting to actual path of file
    var filename = "."  + parse_url.pathname;
    

    file_system.readFile(filename,function(err,data_to_display){
        
        if (err) {
            //If error comes therow the error of Not Found
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 File Not Found");
        }

        //If no error Comes Execute the Data present in particular File

        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data_to_display);
        return res.end();
    });

}).listen(8080);