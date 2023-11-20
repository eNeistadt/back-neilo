import { contratos } from './contratos.js';
import { usuarios } from './usuarios.js';
import { servicios } from './servicios.js';


const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  serviceid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  valoracion: {
    type: Number,
    required: true
  },
  bloqueado: {
    type: Boolean,
    default: false
  },
  fechaPub: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo de comentarios
const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
