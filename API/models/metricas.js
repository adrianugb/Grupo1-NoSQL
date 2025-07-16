const mongoose = require('mongoose');

const MetricasSchema = new mongoose.Schema(
    {
         id: { type: Number },
         estudiante_id: { type: Number, required: true },
         total_sesiones: { type: Number, required: true },
         promedio_calificacion_tutorias: { type: Number, required: true },
         cursos_con_mejora: { type: [String] },
         activo: { type: Boolean, default: true }
    }
);


module.exports = mongoose.model('Metricas', MetricasSchema);
