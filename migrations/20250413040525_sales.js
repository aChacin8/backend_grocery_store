/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('sales').then(function (exists){
    if(!exists){
        return knex.schema.createTable('sales', function (table){
            table.increments('id_sales').primary()
            table.integer('id_users').unsigned().notNullable()
            table.integer('id_subsidiary_products').unsigned().notNullable()
            table.decimal('sales_price', 10,2).notNullable()
            table.integer('quantity_sales').notNullable()

            table.foreign('id_users')
                .references('id_users')
                .inTable('users')
                .onDelete('CASCADE')
            table.foreign('id_subsidiary_products')
                .references('id_subsidiary_products')
                .inTable('subsidiary_products')
                .onDelete('CASCADE')
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('sales').then(function (exists){
    if (exists) {
        return knex.schema.dropTable('sales')
    }
  })
};
