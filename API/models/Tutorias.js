const mongoose = require('mongoose');

const TutoriasSchema = new mongoose.Schema(
  {
    estudiante_id: { type: String, required: true, trim: true },
    tutor_id: { type: String, required: true, trim: true },
    curso_id: { type: String, required: true, trim: true },
    fecha: { type: Date, required: true },
    hora_inicio: { type: String, required: true, trim: true },
    hora_fin: { type: String, required: true, trim: true },
    modalidad: { type: String, required: true, enum: ['virtual', 'presencial'], trim: true },
    estado: { type: String, required: true, enum: ['pendiente', 'completada', 'cancelada'], trim: true },
    activo: { type: Boolean, default: true }
  }
);

module.exports = mongoose.model('Tutorias', TutoriasSchema);
