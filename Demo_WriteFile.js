var fs = require('fs');

//Function WriteFile is used to Write the Content in the File , if file again and again rerunn the content Would Be repplced
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Replaced');
});