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
        tipo: servicio.tipo,
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

exports.borrarServicio = async function (id) {
    try {
        var deleted = await Servicio.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Contrato Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Contrato")
    }

}

exports.modificarServicio = async function (servicio,urlImg) {
    var id = {_id: servicio.id}
    try {
        var oldServicio = await Servicio.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    if (!oldServicio) {
        return false;
    }
    oldServicio.titulo = servicio.titulo
    oldServicio.descripcion = servicio.descripcion
    oldServicio.frecuencia = servicio.frecuencia
    oldServicio.duracion = servicio.duracion
    oldServicio.tipo = servicio.tipo
    oldServicio.costo = servicio.costo
    oldServicio.estado = servicio.estado
    if (urlImg != 0){
        oldServicio.imagen = urlImg;
    }
    
    try {
        var savedUser = await oldServicio.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

exports.getServiciosGenerales = async function () {
    try {
        var Servicios = await Servicio.find();
        return Servicios;
    } catch (e) {
        throw Error('Error while getting Servicios');
    }
}

exports.getServiciosDashboard = async function (id) {
    try {
        var Servicios = await Servicio.find({userid:id})
        return Servicios;
    } catch (e) {
        throw Error('Error while getting Servicios');
    }
}