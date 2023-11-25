var express = require('express')
var router = express.Router()
var ServicioController = require('../../controllers/servicios.controller');
var Authorization = require('../../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/servicios.routes');
  });
router.post('/publicar', Authorization ,ServicioController.publicarServicio)
router.delete('/borrar', Authorization, ServicioController.modificarServicio)
router.put('/modificar', Authorization, ServicioController.borrarServicio)
router.get('/getserviciosgen', ServicioController.getServiciosGenerales)
router.get('/getserviciosdash', Authorization, ServicioController.getServiciosDashboard)


// Export the Router
module.exports = router;


