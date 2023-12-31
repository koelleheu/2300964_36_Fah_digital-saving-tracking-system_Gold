/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admins', (table) => {
        table.increments('admin_id').primary()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('role').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('admins')
};
