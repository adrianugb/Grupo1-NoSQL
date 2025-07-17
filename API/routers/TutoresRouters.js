const express = require('express');
const router = express.Router();
const Tutores = require('../models/Tutores');

// Crear un nuevo tutor
router.post('/', async (req, res) => {
    try {
        const tutor = new Tutores(req.body);
        await tutor.save();
        res.status(201).json(tutor);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Obtener todos los tutores
router.get('/', async (req, res) => {
    try {
        const tutores = await Tutores.find();
        res.json(tutores);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Obtener un tutor por ID
router.get('/:id', async (req, res) => {
    try {
        const tutor = await Tutores.findById(req.params.id);
        
        if (tutor) {
            res.json(tutor);
        } else {
            res.status(404).json({error: "No se encontró el tutor"});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Actualizar un tutor
router.put('/:id', async (req, res) => {
    try {
        const tutor = await Tutores.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        
        if (tutor) {
            res.json(tutor);
        } else {
            res.status(404).json({error: "No se encontró el tutor para actualizar"});
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Eliminar un tutor
router.delete('/:id', async (req, res) => {
    try {
        const tutor = await Tutores.findByIdAndDelete(req.params.id);
        
        if (tutor) {
            res.json({mensaje: "El tutor fue eliminado correctamente"});
        } else {
            res.status(404).json({error: "No se encontró el tutor para eliminar"});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
