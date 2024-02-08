const request = require('request');
const fs = require('fs/promises'); // Async/await syntax using promises

async function getPageContent(url, filePath) {
  // Validate inputs
  if (!url || !filePath) {
    console.error('Please provide both a URL and a file path.');
    return;
  }

  try {
    const response = await request({ url, encoding: null }); // Fetch response raw

    if (response.statusCode !== 200) {
      throw new Error(`Error: HTTP status code ${response.statusCode}`);
    }

    const content = response.body.toString('utf8'); // Decode to string

    await fs.writeFile(filePath, content, 'utf8'); // Store content with UTF-8 encoding

    console.log(`Page content saved to ${filePath}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const url = process.argv[2];
const filePath = process.argv[3];

getPageContent(url, filePath);