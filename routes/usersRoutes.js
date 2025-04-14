const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Asegúrate de que las funciones sean correctas
router.post('/users', userController.createUser)
router.get('/users', userController.findAllUsers)
router.get('/user/:idUsers', userController.findById)
router.get('/users/monterrey', userController.findMonterrey)

module.exports = router
