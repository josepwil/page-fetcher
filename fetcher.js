const process = require('process');
const request = require('request');
const fs = require('fs');

// get command line args for url and where to write file
const args = process.argv.splice(2);
const url = args[0];
const localFilePath = args[1];

// Use the request library to make the HTTP request
request(url, (error, response, body) => {
  if (error) {
    throw error;
  } else {
    // Use Node's fs module to write the file
    const data = body;
    fs.writeFile(localFilePath, data, (error) => {
      if (error) {
        throw error;
      } else {
        // data.length === bytes of body
        console.log(`Downloaded and saved ${data.length} bytes to ${localFilePath}`);
      }
    });
  }
});



