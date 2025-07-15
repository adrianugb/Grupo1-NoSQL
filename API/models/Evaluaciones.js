const mongoose = require('mongoose');

const EvaluacionesSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    estudiante_id: { type: String, required: true, trim: true },
    curso_id: { type: String, required: true, trim: true },
    tipo_evaluacion: { type: String, required: true, trim: true },
    nota: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Evaluaciones', EvaluacionesSchema);
