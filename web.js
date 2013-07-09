var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {



// Read the file and print its contents.
var fs = require('fs')
  , filename = 'index.html';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('Finished file: ' + filename);
  console.log(data);
  response.send(data);

});

///////  response.send('Hello World 2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
