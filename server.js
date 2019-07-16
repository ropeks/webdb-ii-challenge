const express = require('express');
const db = require("./data/dbConfig");

const server = express()
server.use(express.json());

server.get('/api/cars', (req, res) => {
    res.json({ message: 'cars api' });
})

module.exports = server;