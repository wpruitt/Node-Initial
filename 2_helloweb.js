const http = require('http');

// on c9.io hostname must be '8080'
// locally, this can be almost anything
const port = 3000;

// on c9.io hostname must be '0.0.0.0'
// locally, you would use 'localhost' (a variable for '127.0.0.1')
const hostname = 'localhost';

const server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Web! XOXO, Node");
    response.end();
});

server.listen(port, hostname, function(){
    console.log(`Server running at ${hostname}:${port}/`);
});

