/**
 * Write an HTTP server that receives only POST requests and converts
 * incoming POST body characters to upper-case and returns it to the
 * client.
 *
 * Your server should listen on port 8000.
 *
 * open a rest client (like 'postman' for chrome),
 * point to localhost:8000 and send a request 'foo':'bar'
 */

var http = require('http');
var map = require('through2-map');

function processRequest(req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end('Send a POST\n');
  }
}

var server = http.createServer(processRequest).listen(8000);