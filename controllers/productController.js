const ModelProduct = require ('../models/ModelProduct')

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
        .findAll()
        .then (products => {
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al encontrar los productos', error })
        })
}

const findById = (req, res) => {
    ModelProduct
        .findById(req.params.idProduct)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al encontrar el producto por ID', error })
        })  
}

const findLess15 = (req, res) => {
    ModelProduct
        .less15()
        .then(products =>{
            res.status(200).json(products)
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al encontrar los productos con stock menor a 15', error })
        })
}

module.exports = {
    createProduct,
    findAllProducts,
    findById,
    findLess15
}