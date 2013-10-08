/**
  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of lines it contains to the console (stdout).
 */

var fs = require('fs'),
  buf = fs.readFileSync(process.argv[2]),
  str = buf.toString(),
  arr = str.split("\n");
console.log(arr.length);