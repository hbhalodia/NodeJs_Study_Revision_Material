var http = require('http');
var formidable_var = require('formidable'); //imporitng the formidable module
var url_var = require('url');
var file_system = require('fs');


http.createServer(function (req, res) {


    /* this if Is used to parse the uploaded file once it reaches to the server */
    if(req.url == '/fileupload'){
        var form = new formidable_var.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath = files.filetoupload.path;
            var newpath = 'H:/NodeJS_SelfLearn/' + files.filetoupload.name;
            file_system.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        //Creating the HTML Forms to upload a file from computer
        /*start html*/
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        /*end HTML */

        return res.end();
    }

    

}).listen(8080);