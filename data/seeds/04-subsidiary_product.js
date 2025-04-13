/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('subsidiary_products').del();
  await knex('subsidiary_products').insert([
    { id_subsidiary_products: 1, id_subsidiary: 1, id_products: 1, stock: 100 },
    { id_subsidiary_products: 2, id_subsidiary: 1, id_products: 2, stock: 200 },
    { id_subsidiary_products: 3, id_subsidiary: 2, id_products: 3, stock: 150 },
    { id_subsidiary_products: 4, id_subsidiary: 3, id_products: 4, stock: 80 },
    { id_subsidiary_products: 5, id_subsidiary: 3, id_products: 5, stock: 300 },
    { id_subsidiary_products: 6, id_subsidiary: 4, id_products: 6, stock: 120 }
  ]);
};

