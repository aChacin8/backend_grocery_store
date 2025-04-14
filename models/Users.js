const knex = require('../config')

const createUser = (bodyUser) => {
  return knex
    .insert(bodyUser)
    .into('users')
    .returning('*')
}

const findAll = () => {
  return knex
    .select('*')
    .from('users')
    .where('active', true)
}

const findById = (idUsers) => {
  return knex
    .select('*')
    .from('users')
    .where('id_users', idUsers)
    .where('active', true)
}

const findMonterrey = () => {
  return knex
    .select('*')
    .from('users')
    .where('users.city', 'Monterrey')
    .where('users.state', 'Nuevo León')
    .where('active', true)
}
// const more10units = () => { //Find all products with price less than 10
//     return knex
//         .select('users.id_users',
//                 'users.first_name',
//                 'users.last_name',
//                 'sales.quantity_sales',
//                 'products.description'
//             )
//         .from ('sales')
// }

module.exports = {
  createUser,
  findAll,
  findById,
  findMonterrey
}
