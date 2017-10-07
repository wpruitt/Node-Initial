const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    console.log(req.method);
    next();
});

app.post('/', function(req, res, next) {
    console.log('data received');
    next();
})

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Server listening on port 3000');
})