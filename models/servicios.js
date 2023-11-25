
const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    enum: ['.', '.', '.'],
    required: true
  },
  descripcion: {
    type: String,
    trim: true,
    required: true
  },
  frecuencia: {
    type: String,
    required: true
  },
  duracion: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  costo: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
});



const Servicio = mongoose.model('Servicio', servicioSchema);

module.exports = Servicio;
