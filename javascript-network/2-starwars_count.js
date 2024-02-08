const request = require('request');

const apiUrl = process.argv[2]; // Retrieve the API URL from the command line arguments

if (!apiUrl) {
  console.error('Usage: node star_wars_wedge_antilles.js <api_url>');
  process.exit(1);
}

// Make a GET request to the Star Wars API films endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const filmsData = JSON.parse(body);
    const wedgeAntillesFilms = filmsData.results.filter((film) => {
      return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
    });

    console.log(`Number of films with Wedge Antilles: ${wedgeAntillesFilms.length}`);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});