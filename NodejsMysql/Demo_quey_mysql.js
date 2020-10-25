var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: ""
});

con.connect(function(err){
    if(err) throw err;
    con.query(sql,function(err,result){         //Query function is used to execute the sql query written in
        if(err) throw err;                      //sql variable and would store the result in 'result variable ';
        console.log(result);
    });
});
  