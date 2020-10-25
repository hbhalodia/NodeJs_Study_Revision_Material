
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    // this would delete the record with the address of Mountain 21 in the table.
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
      /*
        Affected rows would have the result that how many rows are being affected by the delete query.

        result object is same as we had seen in the insert query 
        {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 0,
            serverStatus: 34,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
        }
      */
    });
  });