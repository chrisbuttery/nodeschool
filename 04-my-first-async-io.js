/**
  Write a program that uses a single asynchronous filesystem operation
  to read a file and print the number of lines it contains to the console (stdout).
 */

var fs = require('fs'),
  file = process.argv[2];

fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;
  var arr = data.split("\n");
  console.log(arr.length);
});