const request = require('request');

const characterId = 18; // Wedge Antilles ID
const baseUrl = 'https://swapi-api.alx-tools.com/api/films/';

async function countWedgeAppearances(url) {
  // Fetch film data
  const response = await request({
    url,
    json: true, // Automatically parse JSON response
  });

  if (response.error) {
    console.error('Error:', response.error.message);
    return;
  }

  const { results: films } = response.body; // Destructure films array

  let appearances = 0;

  // Loop through each film
  for (const film of films) {
    // Check if Wedge Antilles is in the characters array
    if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}`)) {
      appearances++;
    }
  }

  console.log(`Wedge Antilles appearances: ${appearances}`);
}

// Start recursively fetching from the provided URL
countWedgeAppearances(baseUrl);