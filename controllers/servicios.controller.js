var ServicioService = require('../services/servicios.service');
const CloudinaryService = require('../services/cloudinary');

exports.publicarServicio = async function (req, res, next) {
        
        const fileBuffer = req.file.buffer;
        var Servicio = {
            userid: req.body.userid,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            frecuencia: req.body.frecuencia,
            duracion: req.body.duracion,
            costo: req.body.costo,
            rating: req.body.rating,
            estado: req.body.estado,
        }
        try {
            console.log(1)
            const urlImg = await CloudinaryService.uploadImage(fileBuffer);
            console.log(2)
            var createdServicio = await ServicioService.publicarServicio(Servicio, urlImg);
            console.log(3)
            return res.status(201).json({createdServicio, message: "Succesfully Created Servicio"})
        } catch (e) {
            
            console.log(e)
            return res.status(400).json({status: 400, message: "Servicio Creation was Unsuccesfull"})
        }
}

exports.borrarServicio = async function (req, res, next) {
}

exports.modificarServicio = async function (req, res, next) {
}

exports.getServiciosGenerales = async function (req, res, next) {
}

exports.getServiciosDashboard = async function (req, res, next) {
}