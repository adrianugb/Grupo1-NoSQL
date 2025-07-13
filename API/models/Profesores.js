const mongoose = require('mongoose');

const ProfesoresSchema = new mongoose.Schema(
    {
        id: {type: Number,required: true,unique: true},
        nombre: { type: String, required: true,trim: true},
        especialidad: { type: String,trim: true},
        correo: { type: String, required: true, unique: true, lowercase: true,trim: true},
        cursos_impartidos: [{type: String,trim: true}],
        departamento: {type: String,trim: true},
        activo: {type: Boolean,default: true},
        fecha_registro: {type: Date,default: Date.now}
    });


module.exports = mongoose.model('Profesores', ProfesoresSchema);