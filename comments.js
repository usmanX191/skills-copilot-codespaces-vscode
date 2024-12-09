// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone requests the /comments URL. The comments.html file should be
// served as a template, meaning that you should replace any variables in the
// file with actual values before sending the response to the client.

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;

  if (path === '/comments') {
    fs.readFile(__dirname + '/comments.html', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end('Not Found');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data.toString().replace('{message}', 'Hello from comments.js'));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');