const express = require('express');
const carsRouter = require('./api/carsRouter');

const server = express();

server.use(express.json());

//initial get to make sure postman api working
server.get('/', (req, res) => {
  res.send(`<h2>Cars api project working</h2>`);
});

module.exports = server;
