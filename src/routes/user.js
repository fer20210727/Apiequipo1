const express =  require("express")
const userSchema = require('../models/user')
const bcrypt = require('bcryptjs');


const router = express.Router()

function encryptPassword(password){
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

//Crear usuarios

router.post('/users', async (req, res) => {
  const {nombre,app,apm,telefono,email,password}= req.body;
  const hashedPassword = encryptPassword(password);
  const user = new userSchema({
    nombre,
    app,
    apm,
    telefono,
    email,
    password: hashedPassword
  });
  try{
    await user.save();
    res.status(201).json({ message: 'Usuario Creado con Exito'});
  } catch (err) {
    res.status(400).json({ message: 'Usuario NO creado'});
  }
})

//mostrar todos los datos

router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//encontrar un usuario especifico
router.get('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//actualizar un usuario
router.put('/users/:id', (req, res) => {
  const {id} = req.params
  const {nombre, app, apm, telefono, correo, contraseña} = req.body
  userSchema
    .updateOne({_id: id}, { $set: {nombre, app, apm, telefono, correo, contraseña}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

// Eliminar un usuario

router.delete('/users/:id', (req, res) => {
  userSchema
    .deleteOne({_id: req.params.id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

//encontrar el correo especifico
router.get('/users/email/:email', (req, res) => {
  userSchema
    .findOne({email: req.params.email})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})

module.exports = router


//eliminar un usuario
/*
router.delete('/users/:id', (req, res) => {
  const {id} = req.params
  userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})
*/

//mostrar todos los datos
/*
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
})*/
