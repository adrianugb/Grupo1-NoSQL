const mongoose = require('mongoose');

const TutoresSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true, unique: true},
        id: { type: Number},
        nombre: { type: String},
        correo: { type: String},
        especialidades: [{ type: String}],
        disponibilidad: [{ type: String}],
        activo: { type: Boolean, default: true},
        fecha_registro: { type: Date, default: Date.now}
    }
);


module.exports = mongoose.model('Tutores', TutoresSchema);