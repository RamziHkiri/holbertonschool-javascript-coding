#!/usr/bin/node
const request = require('request');
const f = require('fs');

const url = process.argv[2];
const FileName = process.argv[3];

request.get(url).pipe(f.createWriteStream(FileName));
