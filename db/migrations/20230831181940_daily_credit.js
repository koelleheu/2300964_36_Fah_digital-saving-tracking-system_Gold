/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('daily_credit', (table) => {
        table.increments('credit_id').primary()
        table.integer('student_id').unsigned().references('students.student_id')
        table.date ('credit_date')
        table.bigInteger ('amount')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('dailyCredits')
  
};
