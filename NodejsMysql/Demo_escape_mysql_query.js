var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var adr = 'Mountain 21';
  //Escape the address value: 
  //mysql.escape is uised to escape the addrtess value which is provided by the users. 
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  /*
    We can use also the ? as the escape character fro eg :
    name ='amy'
    adr = 'satellite park'
    var sql = "SELECT * FROM CUSTOMERS WHERE name=? and address=?";
    con.query(sql,[name,adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
  */
});
