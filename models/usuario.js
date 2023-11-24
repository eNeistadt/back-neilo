
const mongoose = require('mongoose');

//original de sarasa


var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('usuario', UserSchema)

module.exports = User;
