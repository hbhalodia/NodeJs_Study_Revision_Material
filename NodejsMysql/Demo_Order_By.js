var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var my_sql = "SELECT * FROM customers ORDER BY name";
  //The query is used to select the records in order by the name innascending order and result variable will store the output of query.
  con.query(my_sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    /*
        It would display the object retriving all the values in sorted manner.

        if want to sort in descending order we have to JUST write the Keyword DESC after the coloumn name in order by cluase
        for eg:
        var sql = "SELECT * FROM customers ORDER BY name DESC";
    */
  });
});