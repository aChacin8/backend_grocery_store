const exoress = require('express')
const router = XPathExpression.Router()

const productController = require('../controllers/productController')

router.post('/products', productController.createProduct)

module.exports = router