/**
  06-module
 */

var fs = require('fs');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function (err, files) {
    if (err) {
      return callback(err);
    }

    var arr = [];

    for (var i = 0; i<files.length; i++){
      if (files[i].split('.').pop() === ext){
        arr.push(files[i]);
      }
    }

    return callback(null, arr);
  });
};