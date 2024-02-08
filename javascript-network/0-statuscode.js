const request = require('request');

const url = process.argv[2]; // Retrieve the URL from the command line arguments

if (!url) {
  console.error('Usage: node status_code.js <URL>');
  process.exit(1);
}

// Make a GET request to the specified URL
request(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Print the status code
  console.log(`code: ${response.statusCode}`);
});