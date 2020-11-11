const express = require('express')
const app = express()
const server = require('http').Server(app)

app.set("view engine", "ejs")
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("Hello app");
});
app.get('/:room', (req, res) => {
    res.render("room", { roomId: req.params.room });
});
// app.get('/', (req, res) => {

// });

server.listen("3000");