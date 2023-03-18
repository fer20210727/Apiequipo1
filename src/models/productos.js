const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    NombreProducto: {
        type: String,
        required: true,
    },
    descripción: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('productos', userSchema);

