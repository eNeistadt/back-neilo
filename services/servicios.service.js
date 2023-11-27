var Servicio = require('../models/servicios');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

_this = this

exports.publicarServicio = async function (servicio,urlImg) {
    console.log(10)
    var newServicio = new Servicio({
        userid: servicio.userid,
        titulo: servicio.titulo,
        descripcion: servicio.descripcion,
        frecuencia: servicio.frecuencia,
        duracion: servicio.duracion,
        costo: servicio.costo,
        rating : servicio.rating,
        estado : servicio.estado,
        imagen: urlImg
    })

    try {
        console.log(11)
        var savedServicio = await newServicio.save();
        var token = jwt.sign({
            id: savedServicio._id,
            imagen: savedServicio.imagen
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
      
        console.log(e)    
        throw Error("Error while Creating Servicio")
    }

}

exports.borrarServicio = async function () {

}

exports.modificarServicio = async function () {

}

exports.getServiciosGenerales = async function () {

}

exports.getServiciosDashboard = async function () {

}