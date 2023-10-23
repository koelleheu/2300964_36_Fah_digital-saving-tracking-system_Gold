/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('levels', (table) => {
        table.increments('level_id').primary()
        table.string('level_name').notNullable()
        table.integer('class_id').unsigned()
        table.foreign('class_id').references('classes.class_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('levels')
};
