const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Hello app");
});
app.get('/:room', (req, res) => {
    res.render("room", { roomId: req.params.room });
});

io.on('connection', (socket) => {
    console.log('User IO Connect');
    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", userId);
    });
});
// app.get('/', (req, res) => {

// });

server.listen("3000");