/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('classes', (table) => {
        table.integer('level_id').unsigned()
        table.foreign('level_id').references('levels.level_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('classes', (table) => {
        table.dropColumn('level_id')
    })
};
