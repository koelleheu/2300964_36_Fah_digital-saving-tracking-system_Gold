/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('students', (table) => {
        table.integer('student_id').primary()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('password').notNullable()
        table.integer('class_id').unsigned().references('classes.class_id')
        table.date('birth_date')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('students') 
};
