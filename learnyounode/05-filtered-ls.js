/**
  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a
  directory name as the first argument to your program (e.g.
  '/path/to/dir/') and a file extension to filter by as the second
  argument.

  For example, if you get 'txt' as the second argument then you will
  need to filter the list to only files that end with .txt.

  The list of files should be printed to the console, one file per line.
  You must use asynchronous I/O.
 */

var fs = require('fs'),
  dir = process.argv[2],
  ext = process.argv[3];

function filterDir(dir, ext){
  fs.readdir(dir, function (err, files) {
    if (err) throw err;
    for (var i = 0; i<files.length; i++){
      if (files[i].split('.').pop() === ext){
        console.log(files[i]);
      }
    }
  });
}

filterDir(dir, ext);