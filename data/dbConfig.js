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

function deleteCar(id) {
    return db('cars').where({ id }).del();
};

function updateCar(id, { VIN, make, model, mileage }) {
    return db('cars').where({ id }).update({ VIN, make, model, mileage });
};

module.exports = {
    configOptions,
    getCars,
    addCar,
    deleteCar,
    updateCar
};