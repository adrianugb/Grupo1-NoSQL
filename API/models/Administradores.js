const mongoose = require('mongoose');

const AdministradoresSchema = new mongoose.Schema(
    {
        id: { type: Number,required: true,unique: true},
        nombre: { type: String,required: true,unique: true},
        correo: { type: String, required: true, unique: true, lowercase: true,trim: true},
        fecha_registro: { type: Date, default: Date.now },
        estado: {type: String,enum: ['Activo', 'Inactivo'],default: 'Activo'}
    }
);


module.exports = mongoose.model('Administradores', AdministradoresSchema);