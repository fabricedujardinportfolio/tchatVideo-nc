const express = require('express')
const app = express()
const server = require('http').Server(app)

app.get('/', (req, res) => {
    res.send("Hello app");
});
app.get('/room', (req, res) => {
    res.send('room');
});
// app.get('/', (req, res) => {

// });

server.listen("3000");