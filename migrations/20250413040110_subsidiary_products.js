/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('subsidiary_products').then(function (exists){
    if(!exists){
        return knex.schema.createTable('subsidiary_products', function (table){
            table.increments('id_subsidiary_products').primary()
            table.integer('id_subsidiary').unsigned().notNullable()
            table.integer('id_products').unsigned().notNullable()
            table.integer('stock').notNullable()

            table.foreign('id_subsidiary')
                .references('id_subsidiary')
                .inTable('subsidiary')
                .onDelete('CASCADE')
            table.foreign('id_products')
                .references('id_products')
                .inTable('products')
                .onDelete('CASCADE')
        })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('subsidiary_products').then(function (exists) {
    if (exists) {
        return knex.schema.dropTable('subsidiary_products')
    }
  }
  )
}
