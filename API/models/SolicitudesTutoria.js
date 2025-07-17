const mongoose = require('mongoose');

const SolicitudesTutoriaSchema = new mongoose.Schema(
    {
        //_id: {type: Number,required: true,unique: true},
        estudiante_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiantes', required: true },
        curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
        fecha_solicitada: { type: Date, required: true },
        estado: { type: String, enum: ['pendiente', 'aceptada', 'rechazada'], default: 'pendiente' },
        preferencia_modalidad: { type: String, enum: ['virtual', 'presencial'], required: true },
        activo: { type: Boolean, default: true }
    }
);

module.exports = mongoose.model('SolicitudesTutoria', SolicitudesTutoriaSchema);
