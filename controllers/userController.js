const ModuleUsers = require('../models/Users')

const createUser = (req, res) => {
  ModuleUsers
    .createUser(req.body)
    .then(product => {
      res.status(201).json(product)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al crear el usuario', error })
    })
}

const findAllUsers = (req, res) => {
  ModuleUsers
    .findAll()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al encontrar los usuarios', error })
    })
}

const findById = (req, res) => {
  ModuleUsers
    .findById(req.params.idUsers)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al encontrar el usuario por ID', error })
    })
}

const findMonterrey = (req, res) => {
  ModuleUsers
    .findMonterrey()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al encontrar los usuarios de Monterrey', error })
    })
}

module.exports = {
  createUser,
  findAllUsers,
  findById,
  findMonterrey
}
