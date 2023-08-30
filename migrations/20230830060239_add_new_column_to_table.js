/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('students', function (table) {
        table
          .integer('total_credit_id')  // New column that references another table
          .unsigned()
          .references('total_credit_id')
          .inTable('total_credits');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('students', function (table) {
        table.dropColumn('total_credit_id');
      });
};
