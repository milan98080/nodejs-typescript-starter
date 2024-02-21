/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('intern_data', (table) => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.string('dob').notNullable();
        table.boolean('selection').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
