//create web server
var http = require('http');
var fs = require('fs');

//create server
http.createServer(function(req, res){
  //read file
  fs.readFile('index.html', function(err, data){
    //write response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);