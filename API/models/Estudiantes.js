const mongoose = require('mongoose');

const EstudiantesSchema = new mongoose.Schema(
    {
        id: { type: Number,required: true,unique: true},
        nombre: { type: String, required: true,trim: true},
        carrera: { type: String, required: true,trim: true},
        cuatrimestre: { type: String, required: true,trim: true},
	    correo: { type: String, required: true, unique: true, lowercase: true,trim: true},
        fecha_registro: { type: Date, default: Date.now },
        activo: { type: Boolean,default: true}
    }
);


module.exports = mongoose.model('Estudiantes', EstudiantesSchema);