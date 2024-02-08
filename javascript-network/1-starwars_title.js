const request = require('request');

function getStarWarsMovieTitle(episodeNumber) {
  // Ensure numeric episode number
  if (isNaN(episodeNumber)) {
    console.error('Please provide a valid episode number (integer).');
    return;
  }

  const url = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      if (movieData) {
        console.log('Movie title:', movieData.title);
      } else {
        console.error('Movie not found.');
      }
    } else {
      console.error('Error:', response.statusCode);
    }
  });
}

const episodeNumber = parseInt(process.argv[2]); // Get episode number from argument
if (episodeNumber) {
  getStarWarsMovieTitle(episodeNumber);
} else {
  console.error('Usage: node script.js <episode number>');
}