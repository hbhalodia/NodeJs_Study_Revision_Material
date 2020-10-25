var fs = require('fs');

//Function rename is used to rename the File :
//@param : 'Filename ' to be renamed
//@param : 'New File Name 'to be placed
//@param : 'Function for Error Hadling'


fs.rename('mynewfile3.txt', 'myrenamedfile3.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});