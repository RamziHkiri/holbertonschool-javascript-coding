#!/usr/bin/node
const f = require('fs');
const argv = process.argv[2];

f.readFile (argv[2], 'utf-8', function (error, data) {
 if (error) {
  console.error(error);
  return;
 } else {
  console.log(data);
 }
});