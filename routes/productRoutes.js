const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/products', productController.createProduct)
router.get('/products', productController.findAllProducts)
router.get('/products/:idProduct', productController.findById)
router.get('/product/price15', productController.findLess15)

module.exports = router