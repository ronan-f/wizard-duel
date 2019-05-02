const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let numberOfClients = 0;

io.on("connection", socket => {
    numberOfClients ++;
    console.log('Number of online clients:', numberOfClients);

    socket.on('updateCharacter', function(character) {
        console.log('THERES A NEW CHARACTER', character)
        socket.broadcast.emit('updateCharacter', character)
    })

    socket.on('disconnect', function() {
        numberOfClients --;
        console.log('Number of online clients:', numberOfClients)
    })
});



server.listen(port, () => console.log(`Listening on port ${port}`));