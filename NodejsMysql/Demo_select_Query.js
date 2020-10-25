var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql_query = "SELECT * FROM customers";  //* means to select all the coloumns from table
  //if want to select the name and addrress we have to modify only the select query as we do in mysql   
  con.query(sql_query, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[3].address);
    /* Result would have the values of each row whihc we had fetched as an object
    for eg :
    [
        {id:1, name:'john' ,address:'highway 39'},
        {id:2, name:'john' ,address:'highway 39'},
        ...
        ... upto last row.
        ...
        {id:3, name:'john' ,address:'highway 39'}
    ]

    to print any of the record to the console we can write result[2->'index no'].'name of coloumn'->address.
    
    */
   console.log(fields);
   /*
    this filelds object would have all the details of the each coloumns  name just like its datyabse name , table name and many more.
    [
        {
            catalog: 'def',
            db: 'mydb',
            table: 'customers',
            orgTable: 'customers',
            name: 'name',
            orgName: 'address',
            charsetNr: 33,
            length: 765,
            type: 253,
            flags: 0,
            decimals: 0,
            default: undefined,
            zeroFill: false,
            protocol41: true
        },
        ... 1 more field
    ]

    for this exampple we have fethced the two coloumns in seelect statement so it would 2 here 
    we can access any filed same as the we had fetched the resullt.
    console.log(fields[1].name);    // it would be printing the address.
   */
  });
});