/**
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the
  client.

  Your server should listen on port 8000.
 */

var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.createReadStream(process.argv[2]).pipe(res);
});

server.listen(8000);