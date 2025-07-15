const express = require('express');
const router = express.Router();
const Tutorias = require('../models/Tutorias');

// Crear
router.post('/', async (req, res) => {
  try {
    const nuevaTutoria = new Tutorias(req.body);
    await nuevaTutoria.save();
    res.status(201).json(nuevaTutoria);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Leer todos
router.get('/', async (req, res) => {
  const tutorias = await Tutorias.find();
  res.json(tutorias);
});

// Leer por ID
router.get('/:id', async (req, res) => {
  const tutoria = await Tutorias.findById(req.params.id);
  if (tutoria) res.json(tutoria);
  else res.status(404).json({ error: 'No se encontró la tutoría' });
});

// Actualizar
router.put('/:id', async (req, res) => {
  const tutoria = await Tutorias.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (tutoria) res.json(tutoria);
  else res.status(404).json({ error: 'No se encontró la tutoría para actualizar' });
});

// Eliminar
router.delete('/:id', async (req, res) => {
  const tutoria = await Tutorias.findByIdAndDelete(req.params.id);
  if (tutoria) res.json({ mensaje: 'Tutoría eliminada correctamente' });
  else res.status(404).json({ error: 'No se encontró la tutoría' });
});

module.exports = router;
