const mongoose = require('mongoose');

const SedesSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true, unique: true},
        id: { type: Number},
        nombre: { type: String},
        ubicacion: { type: String},
	    correo: { type: String},
        estado: { type: String}
    }
);


module.exports = mongoose.model('Sedes', SedesSchema);