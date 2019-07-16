const express = require('express');
const db = require("./data/dbConfig");

const server = express()
server.use(express.json());

server.get('/api/cars', async (req, res) => {
    const cars = await db.getCars();
    res.json(cars);
});

server.post('/api/cars', async (req, res) => {
    try {
        await db.addCar(req.body);
        res.status(201).json({ message: 'new car added' });
    } catch {
        res.status(500).json({ message: 'cannot add new car' })
    }
});

module.exports = server;