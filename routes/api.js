/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var comentarios = require('./api/comentario.route')
var contratos = require('./api/contrato.route')
var mensajes = require('./api/mensaje.route')
var servicios = require('./api/servicio.route')

router.use('/users', users);
router.use('/comentarios', comentarios);
router.use('/contratos', contratos);
router.use('/mensajes', mensajes);
router.use('/servicios', servicios);

module.exports = router;
