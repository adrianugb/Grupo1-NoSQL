const express = require('express');
const router = express.Router();
const SolicitudesTutoria = require('../models/SolicitudesTutoria');

// Crear una nueva solicitud de tutoría
router.post('/', async (req, res) => {
    try {
        const solicitudTutoria = new SolicitudesTutoria(req.body);
        await solicitudTutoria.save();
        res.status(201).json(solicitudTutoria);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Obtener todas las solicitudes de tutoría
router.get('/', async (req, res) => {
    try {
        const solicitudes = await SolicitudesTutoria.find()
            .populate('estudiante_id')
            .populate('curso_id');
        res.json(solicitudes);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Obtener una solicitud de tutoría por ID
router.get('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudesTutoria.findById(req.params.id)
            .populate('estudiante_id')
            .populate('curso_id');
        
        if (solicitud) {
            res.json(solicitud);
        } else {
            res.status(404).json({error: "No se encontró la solicitud de tutoría"});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Actualizar una solicitud de tutoría
router.put('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudesTutoria.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        
        if (solicitud) {
            res.json(solicitud);
        } else {
            res.status(404).json({error: "No se encontró la solicitud para actualizar"});
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Cambiar estado de una solicitud (aceptar/rechazar)
router.patch('/:id/estado', async (req, res) => {
    try {
        if (!req.body.estado || !['pendiente', 'aceptada', 'rechazada'].includes(req.body.estado)) {
            return res.status(400).json({error: "Estado no válido"});
        }

        const solicitud = await SolicitudesTutoria.findByIdAndUpdate(
            req.params.id,
            { estado: req.body.estado },
            { new: true }
        );
        
        if (solicitud) {
            res.json(solicitud);
        } else {
            res.status(404).json({error: "No se encontró la solicitud para actualizar"});
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

// Eliminar una solicitud de tutoría
router.delete('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudesTutoria.findByIdAndDelete(req.params.id);
        
        if (solicitud) {
            res.json({mensaje: "La solicitud fue eliminada correctamente"});
        } else {
            res.status(404).json({error: "No se encontró la solicitud para eliminar"});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;
