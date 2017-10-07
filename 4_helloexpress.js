// bring in dependencies / libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parses the content of a text
app.use(bodyParser.text({ type: 'text/html' }));

app.use(express.static('public'));

app.get('/', function(req, res, next) {
    console.log('request method: ', req.method);
});

app.post('/', function(req, res, next) {
    console.log('Message from browser: ',  req.body);
    res.end('Message received. Hello from the back end!');
})

app.listen(3000, function() {
    console.log('Server listening on port 3000');
})