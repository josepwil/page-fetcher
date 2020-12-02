// to dos

const process = require('process');
const request = require('request');

// get command line args for url and where to write file
const args = process.argv.splice(2);
const url = args[0];
const localFilePath = args[1];

// Use the request library to make the HTTP request
request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  // Use Node's fs module to write the file
  

})



