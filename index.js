var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var opn = require('opn');


app.use(express.static('public/static'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  /*opn('http://localhost:3000/', {
    app: 'firefox'
  });*/
  console.log('listening on *:3000');
});