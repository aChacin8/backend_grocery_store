/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('sales').del(); 
  
  await knex('sales').insert([
    { id_users: 1, id_subsidiary_products: 1, sales_price: 12.00, quantity_sales: 5 },
    { id_users: 2, id_subsidiary_products: 2, sales_price: 15.50, quantity_sales: 8 },
    { id_users: 3, id_subsidiary_products: 3, sales_price: 29.00, quantity_sales: 2 },
    { id_users: 4, id_subsidiary_products: 4, sales_price: 19.00, quantity_sales: 10 },
    { id_users: 5, id_subsidiary_products: 5, sales_price: 5.50, quantity_sales: 30 },
    { id_users: 1, id_subsidiary_products: 6, sales_price: 7.99, quantity_sales: 4 },
    { id_users: 3, id_subsidiary_products: 1, sales_price: 10.00, quantity_sales: 12 },
    { id_users: 2, id_subsidiary_products: 5, sales_price: 6.50, quantity_sales: 6 },
    { id_users: 4, id_subsidiary_products: 3, sales_price: 25.00, quantity_sales: 15 },
    { id_users: 5, id_subsidiary_products: 2, sales_price: 14.25, quantity_sales: 18 },
  ]);
};
