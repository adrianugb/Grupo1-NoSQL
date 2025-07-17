const express = require('express');
const router = express.Router();
const Tutorias = require('../models/Tutorias');

// Crear un nuevo tutor
router.post('/', async (req, res) => {
    try {
        const tutor = new Tutorias(req.body);
        await tutor.save();
        res.status(201).json(tutor);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Obtener todos los Tutorias
router.get('/', async (req, res) => {
    try {
        const Tutorias = await Tutorias.find();
        res.json(Tutorias);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Obtener un tutor por ID
router.get('/:id', async (req, res) => {
    try {
        const tutor = await Tutorias.findById(req.params.id);
        
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
        const tutor = await Tutorias.findByIdAndUpdate(
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
        const tutor = await Tutorias.findByIdAndDelete(req.params.id);
        
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
