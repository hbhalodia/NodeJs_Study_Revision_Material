var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE customers";
  //This query Would Drop the table from the DB
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
  /*
    we can also drop table based on the conditon that it exists or not 
    it would have effect in the parameters of the result object;
    the warnign parametr of the result object not be 0 if we try to delete the table whihc is not preset
    {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        serverstatus: 2,
        warningCount: 0, // this parameyte would have the effect.
        message: '',
        protocol41: true,
        changedRows: 0
    }

    the query to do this is shown below:
    con.connect(function(err) {
        if (err) throw err;
        var sql = "DROP TABLE IF EXISTS customers";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
  */
});