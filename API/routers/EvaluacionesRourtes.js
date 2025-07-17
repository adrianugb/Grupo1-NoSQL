const express = require('express');
const router = express.Router();
const Evaluaciones = require('../models/Evaluaciones');

// Crear
router.post('/', async (req, res) => {
  try {
    const nuevaEvaluacion = new Evaluaciones(req.body);
    await nuevaEvaluacion.save();
    res.status(201).json(nuevaEvaluacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Leer todos
router.get('/', async (req, res) => {
  const evaluaciones = await Evaluaciones.find();
  res.json(evaluaciones);
});

// Leer por ID
router.get('/:id', async (req, res) => {
  const evaluacion = await Evaluaciones.findOne({ id: req.params.id });
  if (evaluacion) res.json(evaluacion);
  else res.status(404).json({ error: 'No se encontró la evaluación' });
});

// Actualizar
router.put('/:id', async (req, res) => {
  const evaluacion = await Evaluaciones.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );
  if (evaluacion) res.json(evaluacion);
  else res.status(404).json({ error: 'No se encontró la evaluación para actualizar' });
});

// Eliminar
router.delete('/:id', async (req, res) => {
  const evaluacion = await Evaluaciones.findOneAndDelete({ id: req.params.id });
  if (evaluacion) res.json({ mensaje: 'Evaluación eliminada correctamente' });
  else res.status(404).json({ error: 'No se encontró la evaluación' });
});

module.exports = router;
