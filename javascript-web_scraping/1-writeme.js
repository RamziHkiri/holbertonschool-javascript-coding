#!/usr/bin/node
const f = require('fs');
const fileName = process.argv[2];
const string = process.argv[3];

f.writeFile(fileName, string, 'utf-8', function (error) {
  if (error) {
    console.error(error);
  }
});
