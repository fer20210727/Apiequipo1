const express = require("express");
const userSchema = require("../models/productos");

const router = express.Router();

// create productos

router.post("/products", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all productos
router.get("/products", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a producto
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a productos

router.delete("/products/:id", (req, res) => {
  userSchema
    .deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a productos
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { NombreProducto, descripción, precio, cantidad, imagen} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { NombreProducto, descripción, precio, cantidad, imagen} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;