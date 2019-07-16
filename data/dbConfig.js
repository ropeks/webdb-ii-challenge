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

module.exports = {
    configOptions,
    getCars,
    addCar
};