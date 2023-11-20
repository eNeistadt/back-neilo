
const mongoose = require('mongoose');

const MensajeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuario',
    required: true
  },
  alumno: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },

});

const mensaje = mongoose.model('Mensaje', mensajeSchema);

module.exports = mensaje;