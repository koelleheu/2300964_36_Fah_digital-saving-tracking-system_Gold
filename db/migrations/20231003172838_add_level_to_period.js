/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('levels', (table) => {
        table.integer('period_id').unsigned()
        table.foreign('period_id').references('period.period_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('levels', (table) => {
        table.dropColumn('period_id')
    })
};