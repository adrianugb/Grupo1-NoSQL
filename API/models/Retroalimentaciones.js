const mongoose = require('mongoose');

const RetroalimentacionesSchema = new mongoose.Schema(
    {
        tutoria_id: { type: Number, required: true},
        autor_id: { type: Number, required: true,},
        rol: { type: String, required: true, enum: ['tutor', 'estudiante'] },
        comentario: { type: String, required: true, trim: true },
        calificacion: { type: Number, required: true, min: 1, max: 5 },
        fecha: { type: Date, default: Date.now },
        activo: { type: Boolean, default: true }
    }
);

module.exports = mongoose.model('Retroalimentaciones', RetroalimentacionesSchema);
