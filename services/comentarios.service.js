var Comentario = require('../models/comentarios');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

_this = this

exports.publicarComentario = async function (comentario) {
    var newComentario = new Comentario({
        serviceid: comentario.serviceid,
        nombreservicio: comentario.nombreservicio,
        alumno: comentario.alumno,
        texto: comentario.texto,
        titulo: comentario.titulo,
        calificacion: comentario.calificacion,
        estado: comentario.estado,
        fecha: new Date()
    })

    try {
        var savedComentario = await newComentario.save();
        var token = jwt.sign({
            id: savedComentario._id,
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
      
        console.log(e)    
        throw Error("Error while Creating User")
    }
}

exports.borrarComentario = async function () {

}

exports.modificarComentario = async function () {

}

exports.getComentariosPublicacion = async function () {

}

exports.getComentariosDashboard = async function () {

}
