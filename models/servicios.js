
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({

  userid: {
    type: String,
    trim: true,
    required: true
  },
  titulo: {
    type: String,
    trim: true,
    required: true
  },
  descripcion: {
    type: String,
    trim: true,
    required: true
  },
  frecuencia: {
    type: String,
    trim: true,
    required: true
  },
  duracion: {
    type: String,
    trim: true,
    required: true
  },
  tipo: {
    type: String,
    trim: true,
    required: true
  },
  costo: {
    type: String,
    trim: true,
    required: true
  },
  rating: {
    type: Number,
    trim: true,
    required: true
  },
  estado:{
    type: Boolean,
    required: true,
  },
  imagen: {
    type: String,
    required: true
}
});



const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
