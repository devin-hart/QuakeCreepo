const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const quakeReadLog = fs.createReadStream(__dirname + '/read.txt', 'utf8');
const quakeWriteLog = fs.createWriteStream(__dirname + '/write.txt');


quakeReadLog.on('data', function(data) {
  console.log("Writing to write.txt file ...");
  quakeWriteLog.write(data);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});