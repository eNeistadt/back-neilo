
var User = require('../models/usuario');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


_this = this

exports.createUser = async function (user,urlImg) {
  
    console.log("prueba2")
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    var newUser = new User({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        telefono: user.telefono,
        titulo: user.titulo,
        experiencia: user.experiencia,
        imagen: urlImg
    })

    try {
    
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            telefono: savedUser.telefono,
            titulo: savedUser.titulo,
            experiencia: savedUser.experiencia,
            imagen: savedUser.imagen
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
      
        console.log(e)    
        throw Error("Error while Creating User")
    }
}


exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        console.log("login:",user)
        var _details = await User.findOne({
            email: user.email
        });
        var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
        if (!passwordIsValid) return 0;

        var token = jwt.sign({
            id: _details._id,
            name: _details.name,
            email: _details.email,
            telefono: _details.telefono,
            titulo: _details.titulo,
            experiencia: _details.experiencia,
            imagen: _details.imagen
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return  token;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}


exports.updateUser = async function (user) {
    
    var id = {name :user.name}
    console.log(id)
    try {
        //Find the old User Object by the Id
        var oldUser = await User.findOne(id);
        console.log (oldUser)
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //Edit the User Object
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    oldUser.name = user.name
    oldUser.email = user.email
    oldUser.password = hashedPassword
    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

















// Async function to get the User List
exports.getUsers = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Users = await User.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}


exports.deleteUser = async function (id) {
    console.log(id)
    // Delete the User
    try {
        var deleted = await User.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
}

exports.getUser = async function (filtro) {
    try {
        var Usuario = await User.find(filtro)
        return Usuario;
    } catch (e) {
        throw Error('Error while getting User');
    }
}

