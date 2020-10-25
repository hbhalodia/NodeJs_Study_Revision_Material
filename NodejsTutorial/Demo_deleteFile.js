var fs = require('fs');

//Function Unlink Is Used TO delete the File Froim the Computer system;
//@params : 'File Name ' to be deleted
//@params : Function if any error is thrown 
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});