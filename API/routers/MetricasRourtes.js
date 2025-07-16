const express = require('express');
const router = express.Router();
const Metricas = require('../models/metricas.js');

router.post('/', async (req, res) => {
        try {
            const datosMetricas = new Metricas(req.body);
            await datosMetricas.save();
            res.status(201).json(datosMetricas);
            
        } catch (err) {
            res.status(400).json({error: err.message });
        }
    }
);

router.get('/', async(req, res) =>{
        const listaDatos = await Metricas.find();
        res.json(listaDatos);


    }
);
router.get('/:id', async(req, res) =>{
        const listaDatos = await Metricas.findOne({id: req.params.id});
        if (listaDatos) {
            res.json(listaDatos);
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);
router.put('/:id', async(req, res) =>{
        const dato = await Metricas.findOneAndUpdate({
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
        const dato = await Metricas.findOneAndDelete({id: req.params.id});
        if (dato) {
            res.status(200).json({mensaje: "El elemento fue eliminado"});
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);
module.exports = router;
