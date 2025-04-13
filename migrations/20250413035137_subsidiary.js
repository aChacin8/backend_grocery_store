/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('subsidiary').then(function(exists){
    if(!exists){
        return knex.schema.createTable('subsidiary', function(table){
            table.increments('id_subsidiary').primary()
            table.string('address').notNullable()
        })
    }
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('subsidiary').then(function (exists) {
    if (exists) {
        return knex.schema.dropTable('subsidiary')
    }
    })
}