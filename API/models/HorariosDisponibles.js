const mongoose = require('mongoose');

const HorariosDisponiblesSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    tutor_id: { type: Number, required: true},
    dia: { type: String, required: true, enum: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'], trim: true },
    hora_inicio: { type: Number, required: true },
    hora_fin: { type: Number, required: true },
    activo: { type: Boolean, default: true }
  }
);

module.exports = mongoose.model('HorariosDisponibles', HorariosDisponiblesSchema);