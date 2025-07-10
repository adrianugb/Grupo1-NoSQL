const mongoose = require('mongoose');

const ProfesoresSchema = new mongoose.Schema(
    {
        id: { type: Number},
        nombre: { type: String},
        correo: { type: String},
	    cursos_impartidos: { type: String},
        departamento: { type: String},
        fecha_registro: { type: Date}
    }
);


module.exports = mongoose.model('Profesores', ProfesoresSchema);