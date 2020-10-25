var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "myDB"            //In this example we have to provide in which DB we have to create a  table.
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    var sql_query = "CREATE TABLE employee (name varchar(30),address varchar(100)) "; //Query For Creating the Table into DB.
    con.query(sql_query,function(err,result){         //Query function is used to execute the sql query written in
        if(err) throw err;                      //sql variable and would store the result in 'result variable ';
        console.log("Table is  Created");        //Here the SQL query has been written on con.query function for creating the DB.
    });
});
  