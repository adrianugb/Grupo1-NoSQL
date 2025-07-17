const express = require('express');
const router = express.Router();
const Retroalimentacion = require('../models/Retroalimentaciones');

router.post('/', async (req, res) => {
    try {
        const nuevaRetro = new Retroalimentacion(req.body);
        await nuevaRetro.save();
        res.status(201).json(nuevaRetro);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    
});

router.get('/', async (req, res) => {
    const lista = await Retroalimentacion.find();
    res.json(lista);

});

router.get('/:id', async (req, res) => {
    const dato = await Retroalimentacion.findById(req.params.id);
    if (dato) {
        res.json(dato);
    } else {
        res.status(404).json({ error: "Retroalimentación no encontrada" });
    }

});

router.put('/:id', async (req, res) => {
    const actualizado = await Retroalimentacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (actualizado) {
        res.json(actualizado);
    } else {
        res.status(404).json({ error: "No se pudo actualizar la retroalimentación" });
    }

});

router.delete('/:id', async (req, res) => {
    const eliminado = await Retroalimentacion.findByIdAndDelete(req.params.id);
    if (eliminado) {
        res.status(200).json({ mensaje: "Retroalimentación eliminada correctamente" });
    } else {
        res.status(404).json({ error: "Retroalimentación no encontrada" });
    }

});

module.exports = router;
