const express = require('express');
const router = express.Router();
const Notificaciones = require('../models/Notificaciones');

router.post('/', async (req, res) => {
        try {
            const datosNotificaciones = new Notificaciones(req.body);
            await datosNotificaciones.save();
            res.status(201).json(datosNotificaciones);
            
        } catch (err) {
            res.status(400).json({error: err.message });
        }
    }
);

router.get('/', async(req, res) =>{
        const listaDatos = await Notificaciones.find();
        res.json(listaDatos);


    }
);
router.get('/:id', async(req, res) =>{
        const listaDatos = await Notificaciones.findOne({id: req.params.id});
        if (listaDatos) {
            res.json(listaDatos);
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);
router.put('/:id', async(req, res) =>{
        const dato = await Notificaciones.findOneAndUpdate({
                id: req.params.id}, req.body, {new: true                
            });
        if (dato){
            res.json(dato);
        }
        else{
            res.status(404).json({error: "No se encontro el elemento para actualizar"});
        }
    }
);
router.delete('/:id', async(req, res) =>{
        const dato = await Notificaciones.findOneAndDelete({id: req.params.id});
        if (dato) {
            res.status(200).json({mensaje: "El elemento fue eliminado"});
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);
module.exports = router;
