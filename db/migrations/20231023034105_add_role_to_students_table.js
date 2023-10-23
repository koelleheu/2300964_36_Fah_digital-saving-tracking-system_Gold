/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('students', (table) => {
        table.string('role')
        table.string('foto')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('students', (table) => {
        table.dropColumn('role')
        table.dropColumn('foto')
    })
};
