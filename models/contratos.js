import { comentarios } from './comentarios.js';
import { usuarios } from './usuarios.js';
import { servicios } from './servicios.js';


const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  serviceid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  mailContacto: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  numTelefono: {
    type: String,
    required: true,
  },
  estadoContrato: {
    type: String,
    required: true,
  },
});

const Contrato = mongoose.model('Contrato', contratoSchema);

module.exports = Contrato;
