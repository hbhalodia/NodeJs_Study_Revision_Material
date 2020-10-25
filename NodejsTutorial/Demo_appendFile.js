/* TO read one HTML File And copy its content to mynewfile.html*/

var http = require('http'); // To import HTTP module
var fs = require('fs'); // To impirt the File Module
http.createServer(function (req, res) {
    //fs.readFile function ius used to read the file lfrom computer
    // @param : First Parameter is the name of the file.
    // @param : Second Parameter is the function which accept twpo arguments as error and other the Whole containt to \
    //          store in variable and print its containt.

    fs.readFile('DemoFile1.html', function(err, data_to_Display) {
        res.writeHead(200, {'Content-Type': 'text/html'}); //header part .
        res.write(data_to_Display); // Write the Whole Content of File to Web Page and display the content using variasble
        //create a file named mynewfile1.txt:
        //@params : file name 
        //@params : Conten to be write
        //@params : Function if any error comes and saved
        fs.appendFile('mynewfile1.html', data_to_Display , function (err) {
            if (err) throw err;
            console.log('Saved!');
            return res.end(); //to end the response
        });        
    });
}).listen(8080);