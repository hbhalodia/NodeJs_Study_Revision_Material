var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "myDB"
});

//In all the examples of Mysql the createConnection function remains the same and con.coonect to dB remains same
//We have to change only to the queries to provide Different results

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  /*
  If Already Exists the table we have to use the alter table function.
  for eg : 
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  */
  //Above Query is used to provide the primary key to the id fieild 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created with Primary Key");
    //console.log("DEmo using the Alter Table Functiuon ");
  });
});