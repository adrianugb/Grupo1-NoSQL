﻿//Declarar nuestra librerias
const express = require('express');
const router = express.Router();
const Tutores = require('../models/Tutores');


//Post sirve para insertar datos
//Equivalencia db.getCollection('NEW_COLLECTION_NAME').insertOne({
router.post('/', async (req, res) => {
        try {
            const datosTutores = new Tutores(req.body);
            await datosTutores.save();
            res.status(201).json(datosTutores);
            
        } catch (err) {
            res.status(400).json({error: err.message });
        }
    }
);

router.get('/', async(req, res) =>{
        const listaDatos = await Tutores.find();
        res.json(listaDatos);


    }
);
//Obtener 
router.get('/:id', async(req, res) =>{
        const listaDatos = await Tutores.findOne({id: req.params.id});
        if (listaDatos) {
            res.json(listaDatos);
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);


//Actualizar 
router.put('/:id', async(req, res) =>{
        const dato = await Tutores.findOneAndUpdate({
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

//Obtener 
router.delete('/:id', async(req, res) =>{
        const dato = await Tutores.findOneAndDelete({id: req.params.id});
        if (dato) {
            res.status(200).json({mensaje: "El elemento fue eliminado"});
        }
        else{
            res.status(404).json({error: "No se encontro el elemento"});
        }
    }
);
module.exports = router;