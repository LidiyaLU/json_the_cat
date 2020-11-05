const request = require('request');

let cat = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

request(url, function (error, response, body) {

  if (error) {
    console.log(error);
    console.log(responce.statusCode);
    return callback(error, null);
   }

  const data = JSON.parse(body);
  if (!data.length) {
    return callback('cant find breed', null);
  } 

  const breed = data[0];

  return callback(null, breed.description);
  })
};

module.exports = {fetchBreedDescription};