// Create web server
// 1. Create a web server
// 2. Read the comments.json file
// 3. Respond to the client with the contents of the comments.json file
// 4. Listen on port 3000

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 2. Read the comments.json file
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    // 3. Respond to the client with the contents of the comments.json file
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

// 4. Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});