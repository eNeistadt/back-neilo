import { comentarios } from './comentarios.js';
import { contratos } from './contratos.js';
import { usuarios } from './usuarios.js';


const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  nombre: {
    type: String,
    trim: true,
    required: true
  },
  descripcion: {
    type: String,
    trim: true,
    required: true
  },
  categoria: {
    type: String,
    //poner las categorias (ver lo del middleware o enumerarlas directamente)
    required: true
  },
  frecuencia: {
    type: String,
    enum: ['unica', 'semanal', 'mensual'],
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  costo: {
    type: Number,
    required: true
  },
  duracion: {
    type: Number,
    required: true
  },
  cantValoraciones: {
    type: Number,
    required: true
  },
  totValoraciones: {
    type: Number,
    required: true
  },
  promValoraciones: {
    type: Number,
    required: true
  }
});

const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
