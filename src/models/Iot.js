const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Tarjeta: {
        type: String,
    },
    foco1: {
        type: Number,
    },
    foco2: {
        type: Number,
    },
    Temperatura:{
        type: Number,
    },
    Humedad:{
        type: Number,
    },
    peso:{
        type: Number,
    },
    motor:{
        type: Number,
    }
});

module.exports = mongoose.model('Iot', userSchema);

