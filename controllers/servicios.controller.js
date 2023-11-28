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
            tipo: req.body.tipo,
            costo: req.body.costo,
            rating: req.body.rating,
            estado: req.body.estado,
        }
        try {
            
            const urlImg = await CloudinaryService.uploadImage(fileBuffer);
            var createdServicio = await ServicioService.publicarServicio(Servicio, urlImg);
           
            return res.status(201).json({createdServicio, message: "Succesfully Created Servicio"})
        } catch (e) {
            
            console.log(e)
            return res.status(400).json({status: 400, message: "Servicio Creation was Unsuccesfull"})
        }
}

exports.borrarServicio = async function (req, res, next) {
}

exports.modificarServicio = async function (req, res, next) {
    console.log(1)
    var urlImg;

    if (req.file) {
        try {
            console.log(2)
            const fileBuffer = req.file.buffer;
            urlImg = await CloudinaryService.uploadImage(fileBuffer);
        } catch (e){
            console.log(3)
            return res.status(400).json({status: 400., message: e.message})
        }
        
    } else {
        urlImg = 0;
    }

    var Servicio = {
        id: req.body.id,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        frecuencia: req.body.frecuencia,
        duracion: req.body.duracion,
        tipo: req.body.tipo,
        costo: req.body.costo,
        estado: req.body.estado,
    }

    try {
        var updatedServicio = await ServicioService.modificarServicio(Servicio,urlImg)
        return res.status(200).json({status: 200, data: updatedServicio, message: "Succesfully Updated Servicio"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.getServiciosGenerales = async function (req, res, next) {
}

exports.getServiciosDashboard = async function (req, res, next) {
}