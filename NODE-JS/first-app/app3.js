var http = require('http');
var server = http.createServer(function(req, res) {
  res.write('<html></html>');
  res.end('end message');
});

server.listen(1764);
