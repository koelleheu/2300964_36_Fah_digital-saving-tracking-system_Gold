/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('school_year', (table) => {
        table.increments('year_id').primary()
        table.integer('year_start').notNullable()
        table.integer('year_end').notNullable()
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('schoolYears')
  
};
