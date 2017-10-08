// bring in dependencies / libraries
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// environment variables
var port = 8080;
var hostname = 'localhost';

// parses text content of a http request
app.use(bodyParser.text({ type: 'text/html' }));

// servers static files like our html $ css from public folder
app.use(express.static('public'));

// this handles our post request from the front end
app.post('/', function(req, res/* , next */) {
    console.log('Message from browser: ',  req.body);
    res.end('Message received. Hello from the back end!');
})

// start the server and listen for requests
var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}/`);
});