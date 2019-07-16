const express = require('express');
const db = require("./data/dbConfig");

const server = express()
server.use(express.json());

server.get('/api/cars', async (req, res) => {
    const cars = await db.getCars();
    res.json(cars);
});

module.exports = server;