/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('sales').del();

  await knex('sales').insert([
    { id_users: 1, id_subsidiary_products: 1, sales_price: 12.00, quantity_sales: 5 },
    { id_users: 2, id_subsidiary_products: 2, sales_price: 20.00, quantity_sales: 10 },
    { id_users: 3, id_subsidiary_products: 3, sales_price: 15.00, quantity_sales: 8 },
    { id_users: 4, id_subsidiary_products: 4, sales_price: 18.00, quantity_sales: 3 },
    { id_users: 5, id_subsidiary_products: 5, sales_price: 0.90, quantity_sales: 40 },
    { id_users: 3, id_subsidiary_products: 6, sales_price: 1.20, quantity_sales: 25 }
  ]);
};
