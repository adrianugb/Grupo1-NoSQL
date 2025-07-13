const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true, unique: true},
        id: { type: Number},
        nombre: { type: String,required: true,unique: true},
        codigo: { type: String,required: true,unique: true},
        creditos: { type: String, required: true},
        profesor_asignado: { type: String,required: true},
        estado: { type: String,enum: ['Activo', 'Inactivo'],default: 'Activo'}
    }
);


module.exports = mongoose.model('Curso', CursoSchema);
