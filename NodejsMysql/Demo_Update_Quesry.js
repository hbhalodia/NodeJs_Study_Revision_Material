var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  /*
    this query is used to uodate the record based on the particular conditions
    the address valley 345 will update to canyon 123 after executing the query.
  */
  con.query(sql, function (err, result) {
    if (err) throw err;
    //affected rows will have the result how many rows are being afect by the query.
    console.log(result.affectedRows + " record(s) updated");
  });
});