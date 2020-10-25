var http = require('http');
var my_module_data = require('./myfirstmodule.js');

//create server object using the createServer function inside the HTTP module.
http.createServer(function (req, res) {

    /*
    //Function passedf to the arguement has the request object (req) that represents req fromm client side as object
    //(http.incomingMessage object)

    //This Object has the property called URL which holds the part that coes after Domain Name.
    // This Demo is Done in the File Callled : demo_req_url.js
    */


    //This Function would be getting executed When Someone Try to access computer on the port 8080 after the node server is ruuning
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    //First Arguemment is the status type or status Code , 200 means everything OK ,
    // Second Arguement is object Containing the response Heqaders.


    //res.end('Hello World!');  Initially while making the first node Js file
  
    res.write('My System Date and Time is : ' + my_module_data.myDateTime()); 
    // Initially after Creating the First Modukle we had printed on the Screen current
    // Date and time of system after printing the Hello World
    //Write function is used to write the response from the server to the client.
  
    res.end();    
    // End is used to end the response from server/

}).listen(8080);
