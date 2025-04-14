const knex = require('../config')

const createProduct = (bodyProducts) => {
  return knex
    .insert(bodyProducts)
    .into('products')
    .returning('*')
}

const findAll = () => {
  return knex
    .select('*')
    .from('products')
    .where('active', true)
}

const findById = (idProduct) => {
  return knex
    .select('*')
    .from('products')
    .where('id_products', idProduct)
    .where('active', true)
}

const findLowPrice = () => { // Find all products with price less than 15
  return knex
    .select('*')
    .from('products')
    .where('price', '<', 15)
    .where('active', true)
}

const noSalesGdl = () => {
  return knex('products')
    .distinct('products.id_products', 'products.name')
    .whereNotIn('products.id_products', function () {
      this.select('subsidiary_products.id_products')
        .from('sales')
        .leftJoin('subsidiary_products', 'sales.id_subsidiary_products', 'subsidiary_products.id_subsidiary_products')
        .leftJoin('users', 'sales.id_users', 'users.id_users')
        .where('users.city', 'Guadalajara')
    })
}

module.exports = {
  createProduct,
  findAll,
  findById,
  findLowPrice,
  noSalesGdl
}
