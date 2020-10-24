var url = require('url'); //Used to import the module.
var adr = 'http://localhost:8080/default.htm?year=2017&month=february&day=tuesday'; //Url Address to be parsed and fetched the Quewries From this URL
var q = url.parse(adr, true); //Parse Function 

console.log(q.host); //returns 'localhost:8080' , hostname
console.log(q.pathname); //returns '/default.htm' 
console.log(q.search); //returns '?year=2017&month=february&day=tuesday'  //retuern the Quewry

//query function retuen the object which includes all the part after domain name
var qdata = q.query; //returns an object: { year: 2017, month: 'february', day:'tuesday' } 
console.log(qdata.month); //returns 'february'
console.log(qdata.year); //retuen 2017
console.log(qdata.day); //return tuesday