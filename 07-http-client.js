/**
  Write a program that performs an HTTP GET request to a URL provided to
  you as the first command-line argument. Write the String contents of
  each "data" event from the response to a new line on the console (stdout).
 */

var http = require('http'),
  url = process.argv[2];

http.get(url, function(req){
  req.setEncoding('utf8');
  req.on("data",function (data) {
    console.log('data', data);
  });
  req.on("error",function (data) {
    console.log('error');
  });
});