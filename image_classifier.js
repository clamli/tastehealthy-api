var request = require('request');
var fs = require("fs");
var path = require("path");
var util = require('util');

// set body
var jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, "images", "payload for example images.txt"), 'utf8'));

// set the headers
var headers = {
	'Content-Type':      'application/json'
}

// Configure the request
var options = {
	url: 'http://tastehealthy.comp.nus.edu.sg/classify',
	method: 'POST',
	headers: headers,
	json: true,
	body: jsonData
}

// Start the request
request(options, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(util.inspect(body, {depth: null}));
	} else {
		console.log('error')
	}
})
