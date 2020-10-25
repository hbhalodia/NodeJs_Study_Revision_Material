var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  //This query would return the record first 5 rows becuse its limited to that only.
  con.query(sql, function (err, result) {
    if (err) throw err;
    //Result variable would have all the 5 records which we had fetched and we can access particular record by index.
    console.log(result);
  });

  /*
    if we wanr satrting drom 2nd row then how to use limit

    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2 ";
    or 
    var sql = "SELECT * FROM customers LIMIT 2,5 ";  see its reverse in offset and direwct , in limit
    
    here 2 means start from 3 exlude 1 and 2
    and further the same thing to execute the SQL Query. 
  */
});