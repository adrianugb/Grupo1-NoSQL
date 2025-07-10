const mongoose = require('mongoose');

const AdministradoresSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true, unique: true},
        id: { type: Number},
        nombre: { type: String},
        fecha_registro: { type: Date, default: Date.now }
       
    }
);


module.exports = mongoose.model('Administradores', AdministradoresSchema);