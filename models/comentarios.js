
const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  serviceid: {
    type: String,
    required: true
  },
  nombreservicio: {
    type: String,
    required: true
  },
  alumno: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  calificacion: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo de comentarios
const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
