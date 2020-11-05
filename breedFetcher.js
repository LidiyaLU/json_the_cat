const request = require('request');

let cat = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + cat, function (error, response, body) {

  if (error) {
    console.log(error);
    console.log(responce.statusCode);
   }

  const data = JSON.parse(body);
  if (data.length > 0) {
  console.log(data[0].description);
  } else {
    console.log('there is no such breed');
  }
  });