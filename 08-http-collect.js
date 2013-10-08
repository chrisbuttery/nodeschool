/**
  Write a program that performs an HTTP GET request to a URL provided two
  you as the first command-line argument. Collect all data from the
  server (not just the first "data" event) and then write two lines to the console (stdout).

  The first line you write should just be an integer representing the
  number of characters received from the server and the second line
  should contain the complete String of characters sent by the server.
 */

var http = require('http'),
  url = process.argv[2],
  BufferList = require('bl'),
  bl = new BufferList();

http.get(url, function(req){
  req.setEncoding('utf8');
  req.on("data", function (data) {
    bl.append(data);
  });
  req.on("end",function (data) {
    console.log(bl.length+ ' characters \n' +bl.toString());
  });
});