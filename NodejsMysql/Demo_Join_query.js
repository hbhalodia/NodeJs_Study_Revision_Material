var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  //Thisb sql query os used to join the two tables and after exceutr result is store in result object.
  //We can use all the types ofJoin in NodeJs just we have to remember the synatx of SQL.

  //We can also include the Left and right Join and rest is the same.
  con.query(sql, function (err, result) {
    if (err) throw err;
    //result will have the object type we can access it by using the index numbers
    console.log(result);
  });
});