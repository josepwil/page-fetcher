// to dos
const process = require('process');
const request = require('request');
const fs = require('fs');

// get command line args for url and where to write file
const args = process.argv.splice(2);
const url = args[0];
const localFilePath = args[1];

// Use the request library to make the HTTP request
request(url, function (error, response, body) {  
  // Use Node's fs module to write the file
  const data = body;
  fs.writeFile(localFilePath, data, (err) => {
    if (err) throw err;
    console.log('the file was saved');
  })

})



