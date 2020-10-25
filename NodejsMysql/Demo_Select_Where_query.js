var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql_query = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
  //query is used to seelct the partiular record from the table.
  //var sql_query = "SELECT * FROM customers WHERE address LIKE 'S%'";
  // it would fetched the rtecord whose address sytarts wiht the S characters.
  con.query(sql_query , function (err, result) {
    if (err) throw err;
    console.log(result);
    /*
        result would be the type of object which would have the data in object form.
        we can access the data by result[0] etc.
    */
  });
});