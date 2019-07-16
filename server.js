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

server.delete('/api/cars/:id', async (req, res) => {
    try {
        await db.deleteCar(req.params.id);
        res.status(201).json({ message: 'car deleted!' });
    } catch {
        res.status(500).json({ message: 'cannot delete car' })
    }
    
});

server.put('/api/cars/:id', async (req, res) => {
    try {
        await db.updateCar(req.params.id, req.body);
        res.status(201).json({ message: 'car updated!' });
    } catch {
        res.status(500).json({ message: 'cannot update car' })
    }
});

module.exports = server;