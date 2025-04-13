process.loadEnvFile();

const enviroment = process.env.NODE_ENV || 'development';
const knex = require('knex');
const knexFile = require('./knexfile.js');

module.exports = knex(knexFile[enviroment]);