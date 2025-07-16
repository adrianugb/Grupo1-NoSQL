const express = require('express');
const router = express.Router();
const Administrador = require('../models/Administradores');

// Crear un administrador
router.post('/', async (req, res) => {
    try {
        const nuevoAdministrador = new Administrador(req.body);
        await nuevoAdministrador.save();
        res.status(201).json(nuevoAdministrador);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

 
router.get('/', async (req, res) => {
    const listaAdministradores = await Administrador.find();
    res.json(listaAdministradores);
});

router.get('/:id', async (req, res) => {
    const administrador = await Administrador.findOne({ id: req.params.id });
    if (administrador) {
        res.json(administrador);
    } else {
        res.status(404).json({ error: "No se encontró el administrador" });
    }
});

router.put('/:id', async (req, res) => {
    const administrador = await Administrador.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (administrador) {
        res.json(administrador);
    } else {
        res.status(404).json({ error: "No se encontró el administrador para actualizar" });
    }
});

router.delete('/:id', async (req, res) => {
    const administrador = await Administrador.findOneAndDelete({ id: req.params.id });
    if (administrador) {
        res.status(200).json({ mensaje: "El administrador fue eliminado" });
    } else {
        res.status(404).json({ error: "No se encontró el administrador" });
    }
});

module.exports = router;
