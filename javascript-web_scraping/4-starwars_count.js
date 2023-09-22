#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (error, respose, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    let ct = 0;
    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes('18')) {
          ct++;
        }
      }
    }
    console.log(ct);
  }
});
