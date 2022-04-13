var express = require("express");
var socket = require("socket.io");
var app = express();
var server = app.listen(4000,function(){
    console.log("open");
});
app.use(express.static("public"))
var io = socket(server);


io.on("connection",function(soc){
console.log("made")
soc.on("chat",function(data){
    io.sockets.emit('chat',data);
})
soc.on("disconnect",function(){
    console.log("diss");
})

})

    