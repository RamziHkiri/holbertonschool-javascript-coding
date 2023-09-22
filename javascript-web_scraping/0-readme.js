#!/usr/bin/node
const f = require('fs');
const argv = process.argv[2];

f.readFile(argv, 'utf-8', function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
