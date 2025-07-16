const mongoose = require('mongoose');

const NotificacionesSchema = new mongoose.Schema({
  id: { type: Number }, 
  usuario_id: { type: Number, required: true },
  rol: { type: String, required: true },
  mensaje: { type: String, required: true },
  leida: { type: Boolean, default: false },
  fecha_envio: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true }
});

module.exports = mongoose.model('Notificaciones', NotificacionesSchema);