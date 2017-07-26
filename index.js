var app = require('express')();
var http = require('http').Server(app);
var opn = require('opn');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  opn('http://localhost:3000/', {
    app: 'firefox'
  });
  console.log('listening on *:3000');
});