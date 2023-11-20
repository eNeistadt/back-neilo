
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    numTelefono: {
        type: String,
        required: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    experiencia: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },    
  });

  const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;


//original de sarasa

var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;
