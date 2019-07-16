const knex = require('knex');
const config = require('../knexfile').development;
const configOptions = knex(config);

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3',
    },
    useNullAsDefault: true,
});

function getCars() {
    return db('cars');
}

function addCar({ VIN, make, model, mileage }) {
    return db('cars').insert({ VIN, make, model, mileage });
}

module.exports = {
    configOptions,
    getCars,
    addCar
};