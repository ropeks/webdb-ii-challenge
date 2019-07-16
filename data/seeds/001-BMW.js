
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '2HJKHF93H9R03', make: 'legendary', model: 'OG', mileage: '1000'},
        {id: 2, VIN: '2HJKHF93H9R04', make: 'gold', model: 'kings', mileage: '9001'},
        {id: 3, VIN: '2HJKHF93H9R05', make: 'batmenish', model: 'batmobile', mileage: '2000'}
      ]);
    });
};
