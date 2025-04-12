/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (!exists){
        return knex.schema.createTable('products', function (table){
            table.increments('id_products').primary()
            table.string('name').notNullable()
            table.text('description')
            table.decimal('price', 10,2)
            table.string('sku', 20).notNullable().unique()
            table.boolean('active').notNullable().defaultTo(true)
            table.timestamp('created_at').defaultTo(knex.fn.now())// funcion knex para devolver la fecha y hora actual
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (exists){
        return knex.schema.dropTable('products')
    }
})
};
