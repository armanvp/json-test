var express = require('express');
var fs = require('fs');
var app = express();

// Check parameters
if (process.argv.length < 3) {
    console.log('Input JSON file missing');
    console.log('node app.js [input-file.json]');
    process.exit();
}

var inputFile = process.argv[2];

app.get('/', function (request, response) {
    response.send('Test API endpoint at /api/test');
});

app.get('/api/test', function (request, response) {
    fs.readFile(inputFile, function(error, data) {
        response.type('json');
        response.send(data);
    });
});

app.listen(3000, function() {
    console.log('Server listening at port 3000');
});