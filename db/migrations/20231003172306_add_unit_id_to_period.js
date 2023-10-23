/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('period', (table => {
        table.integer('unit_id').unsigned()
        table.foreign('unit_id').references('units.unit_id')
    }))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('period', (table) => {
        table.dropColumn('unit_id')
    })
};
