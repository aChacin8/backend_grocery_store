/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('users').then(function (exists) {
    if(!exists){
        return knex.schema.createTable('users', function (table){
            table.increments('id_users').primary()
            table.string('first_name').notNullable()
            table.string('last_name').notNullable()
            table.string('email').notNullable().unique()
            table.string('password').notNullable()
            table.string('address')
            table.string('city')
            table.string('state')
            table.string('postal_code')
            table.string('phone')
            table.boolean('active').notNullable().defaultTo(true)
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
    }
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('users').then (function (exists) {
    if (exists){
        return knex.schema.dropTable('users')
    }
  })
};
