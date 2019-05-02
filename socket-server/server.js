const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
    console.log('New client connected' + socket.id);
    socket.on('chat message', function(msg){
        console.log('Message', msg)
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));