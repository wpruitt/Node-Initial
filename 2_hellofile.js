const fs = require('fs');
const fileToRead = process.argv[2] || 'README.md';
const lineIndex = process.argv[3] - 1 || 3;

fs.readFile(fileToRead, function (err, data) {
    if (err) throw err;

    var lines = data.toString('utf-8').split("\n");
    
    console.log(lines[lineIndex]);
  });