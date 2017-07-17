var http = require('http').Server();
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('msg', function (data) {
  	io.sockets.emit('msg',data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});