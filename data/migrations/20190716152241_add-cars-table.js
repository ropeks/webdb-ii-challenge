
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        table.increments();
        table.text("VIN", 128).unique();
        table.text("make", 128);
        table.text("model", 128);
        table.text("mileage", 128);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
