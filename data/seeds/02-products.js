/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('products').del()
  await knex('products').insert([
    {
      id_products: 1,
      name: 'Notebook',
      description: 'A ruled paper notebook',
      price: 12.99,
      sku: 'NB001'
    },
    {
      id_products: 2,
      name: 'Pen',
      description: 'Black ink ballpoint pen',
      price: 2.49,
      sku: 'PEN002'
    },
    {
      id_products: 3,
      name: 'Backpack',
      description: 'Waterproof school backpack',
      price: 29.99,
      sku: 'BP003'
    },
    {
      id_products: 4,
      name: 'Calculator',
      description: 'Scientific calculator',
      price: 15.99,
      sku: 'CAL004'
    },
    {
      id_products: 5,
      name: 'Eraser',
      description: 'Rubber eraser',
      price: 0.99,
      sku: 'ER005'
    },
    {
      id_products: 6,
      name: 'Ruler',
      description: '12-inch plastic ruler',
      price: 1.25,
      sku: 'RL006'
    }
  ])
}
