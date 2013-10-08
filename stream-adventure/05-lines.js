/**
 * Instead of transforming every line as in the previous "INPUT OUTPUT" example,
 * for this challenge, convert even-numbered lines to upper-case and odd-numbered
 * lines to lower-case. Consider the first line to be odd-numbered.
 */

var split = require("split"),
  through = require('through'),
  count = 1;

var tr = through(function(buf) {
  var val = buf.toString();
  (count % 2) === 0 ? console.log(val.toUpperCase()) : console.log(val.toLowerCase());
  count++;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);