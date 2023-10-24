/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    // return knex.schema.alterTable('students', function (table) {
    //   // Step 1: Create a new integer column
    //   table.integer('new_student_id');
  
    //   // Step 2: Copy data from the old column to the new one
    //   return knex.schema.raw('UPDATE students SET new_student_id = student_id');
  
    //   // Step 3: Drop the old column
    //   table.dropColumn('student_id');
  
    //   // Step 4: Rename the new column to the old column name
    //   table.renameColumn('new_student_id', 'student_id');
    // });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // return knex.schema.alterTable('students', function (table) {
    //     table.increments('student_id').primary();
    //   // Revert the migration if needed
    //   // You would perform the opposite steps here to rollback the migration
    // });
  };
