/**
  This problem is the same as the previous problem (HTTP COLLECT) in
  that you need to use `http.get()`. However, this time you will be
  provided with three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the
  URLs and print it to the console (stdout). You don't need to print out
  the length, just the data as a String; one line per URL. The catch is
  that you must print them out in the same order as the URLs are
  provided to you as command-line arguments.
 */

var http = require('http'),
  BufferList = require('bl'),
  urls = [process.argv[2], process.argv[3], process.argv[4]],
  results = [],
  count = 0;

function printData(){
  console.log('results is ' + results);
}

function getData(idx, cb){
  var bl = new BufferList();

  http.get(urls[idx], function(req){
    req.setEncoding('utf8');

    req.on("data", function (data) {
      bl.append(data);
    });

    req.on("end", function () {
      results[idx] = bl;
      count++;
      if (count === urls.length){
        printData();
      }
    });
  });
}

for(var i = 0; i < urls.length; i++){
  getData(i);
}