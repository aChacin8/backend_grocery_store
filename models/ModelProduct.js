const knex = require ('../config')

const create = (bodyProducts) => {
    return knex
        .insert(bodyProducts)
        .into('products')
        .returning('*')
}

const findAll = () => {
    return knex
        .select('*')
        .from ('products')
        .where ('active', true)
}

const findById = (idProduct)=> {
    return knex
        .select('*')
        .from ('products')
        .where('id_products', idProduct)
        .where('active', true)
}

const less15 = () => { //Find all products with price less than 15
    return knex
        .select('*')
        .from ('products')
        .where ('price', '<', 15)
        .where ('active', true)
}

module.exports = {
    create,
    findAll,
    findById,
    less15
}