var mysql = require('mysql');

//Used to create the connection with the mysql. 
var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: ""
});

//This Function would connect to the mysql using the above function variable.
con.connect(function(err){
    if(err) throw err;
    console.log('Connected to Mysql');
});
  