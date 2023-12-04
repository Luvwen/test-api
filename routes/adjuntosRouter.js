const express = require('express')
const { buscarAdjunto } = require('../controllers/buscarAdjuntoController')
const route = express.Router()


route.get('/buscarAdjunto', buscarAdjunto)

module.exports = route
