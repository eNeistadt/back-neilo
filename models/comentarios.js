
const mongoose = require('mongoose');

var ComentarioSchema = new mongoose.Schema({
  serviceid: String,
  nombreservicio: String,
  alumno: String,
  texto: String,
  titulo: String,
  calificacion: String,
  estado: String,
  fecha: Date,
})

// Crear el modelo de comentarios
const Comentario = mongoose.model('Comentario', ComentarioSchema);

module.exports = Comentario;
