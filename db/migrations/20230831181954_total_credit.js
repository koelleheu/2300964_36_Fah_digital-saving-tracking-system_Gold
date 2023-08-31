/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('total_credit', (table) => {
        table.increments('total_credit_id').primary()
        table.integer('student_id').unsigned().references('students.student_id')
        table.bigInteger ('total_amount')
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('totalCredits')

};
