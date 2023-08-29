/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments('class_id').primary()
        table.string('class_name').notNullable()
        // table.integer('student_id').unsigned().references('students.student_id')
        table.integer('level_id').unsigned().references('levels.level_id')
        table.integer('year_id').unsigned().references('school_year.year_id')
        table.integer('unit_id').unsigned().references('units.unit_id')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('classes')
  
};
