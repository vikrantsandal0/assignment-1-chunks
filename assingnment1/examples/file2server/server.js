var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
    fs  = require('fs');
    path= require('path');
    server.listen(5000);
    console.log("server has started");
    
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/',function(req,res){
      res.sendFile(path.join(__dirname +'/public/index.html'));
      //__dirname : It will resolve to your project folder.
    });
  var file=[];
  io.sockets.on('connection', function(socket){

  socket.on('chunkSending',function(chunk){
    file.push(chunk);
  });
  socket.on("chunksendingComplete",function (extention) {
    fs.writeFile(__dirname+ '/public/complete'+"." + extention , file.join(""),{encoding: 'base64'},function(err){
    //console.log("DONE");
    socket.emit('everythingCompleted');
    });
    });

 
});






