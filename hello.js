var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8081, '10.14.171.20');
console.log('Server running at http://10.14.171.20:8081/');
