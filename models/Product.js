const knex = require ('../config')

const create = (bodyProducts) => {
    return knex
        .insert(bodyProducts)
        .into('products')
        .returning('*')
}

const findAllProducts = () => {
    return knex
        .select('*')
        .from ('products')
        .where ('active', true)
}

module.exports = {
    create,
    findAllProducts
}