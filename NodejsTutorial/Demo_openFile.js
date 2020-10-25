var fs = require('fs');

//Open File Takes the Two Parameteers 
//@param : 'File Name '
//@param : 'Flag : if 'w' it would open file in write Mode' else create empty file
//@param : 'Function for error showing';  

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});