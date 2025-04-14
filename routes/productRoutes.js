const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/products', productController.createProduct)
router.get('/products', productController.findAllProducts)
router.get('/product/:idProduct', productController.findById)
router.get('/products/low/price', productController.findLowPriceProducts)
router.get('/products/noSalesGdl', productController.noSalesProductsGdl)

module.exports = router
