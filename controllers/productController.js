const ModelProduct = require('../models/Product')

const createProduct = (req, res) => {
  ModelProduct
    .createProduct(req.body)
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
    .then(products => {
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

const findLowPriceProducts = (req, res) => {
  ModelProduct
    .findLowPrice()
    .then(products => {
      res.status(200).json(products)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al encontrar los productos con stock menor a 15', error })
    })
}

const noSalesProductsGdl = (req, res) => {
  ModelProduct
    .noSalesGdl()
    .then(products => {
      res.status(200).json(products)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al encontrar los productos sin ventas en Guadalajara', error })
    }
    )
}

module.exports = {
  createProduct,
  findAllProducts,
  findById,
  findLowPriceProducts,
  noSalesProductsGdl
}
