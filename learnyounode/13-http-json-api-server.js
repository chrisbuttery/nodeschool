/**
 * Write an HTTP server that serves JSON data when it receives a GET
 * request to the path '/api/parsetime'. Expect the request to contain a
 * query string with a key 'iso' and an ISO-format time as the value.
 * For example:
 *
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 *
 * The JSON response should contain only 'hour', 'minute' and 'second'
 * properties. For example:
 *
 * {
 *  "hour": 14,
 *  "minute": 23,
 *  "second": 15
 * }
 *
 * Add second endpoint for the path '/api/unixtime' which accepts the
 * same query string but returns UNIX epoch time under the property
 * 'unixtime'. For example:
 *
 * { "unixtime": 1376136615474 }
 *
 * Your server should listen on port 8000.
 *
 * http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z
 * http://localhost:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z
 */

var http = require('http'),
    moment = require('moment'),
    url = require('url');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  var urlParts = url.parse(req.url, true), // returns URL object
      date = new moment(urlParts.query.iso), // moment based on {urlParts} query.iso property
      path = urlParts.pathname; // cache the pathname

  if ('/api/parsetime' === path) {
    res.write(JSON.stringify({
      'hour': parseInt(date.format('H'), null),
      'minute': parseInt(date.format('mm'), null),
      'second': parseInt(date.format('ss'), null)
    }));
  }
  else if ('/api/unixtime' === path) {
    res.write(JSON.stringify({
      'unixtime': date._d.getTime()
    }));
  }
  res.end();
}).listen(8000);