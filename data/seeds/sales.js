/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('sales').del();
  await knex('sales').insert([
    { id_sales: 1, id_users: 1, id_subsidiary_products: 1, sales_price: 12, quantity_sales: 5 },
    { id_sales: 2, id_users: 1, id_subsidiary_products: 2, sales_price: 2, quantity_sales: 20 },
    { id_sales: 3, id_users: 2, id_subsidiary_products: 3, sales_price: 29, quantity_sales: 2 },
    { id_sales: 4, id_users: 3, id_subsidiary_products: 4, sales_price: 15, quantity_sales: 12 },
    { id_sales: 5, id_users: 4, id_subsidiary_products: 5, sales_price: 0.9, quantity_sales: 40 },
    { id_sales: 6, id_users: 5, id_subsidiary_products: 6, sales_price: 1.2, quantity_sales: 25 }
  ]);
};
