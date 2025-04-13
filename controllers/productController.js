const ModelProduct = require ('../models/Product')

const createProduct = (req, res)=> {
    ModelProduct
        .create(req.body)
        .then(product => {
            res.status(201).json(product)
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al crear el producto', error })
        })
}

const findAllProducts = (req, res) => {
    ModelProduct
        .findAllProducts()
        .then (products => {
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al encontrar los productos', error })
        })
}

module.exports = {
    createProduct,
    findAllProducts
}