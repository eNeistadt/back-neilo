
const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: String,
    required: true
  },
  alumno: {
    type: String,
    required: true,
  },
  servicio: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Contrato = mongoose.model('Contrato', contratoSchema);

module.exports = Contrato;
