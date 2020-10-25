var fs = require('fs');

//Used for the event purpose is the file ios open or not 
var rs = fs.createReadStream('./Demofile1.html');

rs.on('open', function () {
  console.log('The file is open');
});