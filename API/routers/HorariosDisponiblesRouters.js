const express = require('express');
const router = express.Router();
const Horario = require('../models/HorariosDisponibles');

router.post('/', async (req, res) => {
    try {
        const nuevoHorario = new Horario(req.body);
        await nuevoHorario.save();
        res.status(201).json(nuevoHorario);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}
);

router.get('/', async (req, res) => {
    const lista = await Horario.find();
    res.json(lista);


}
);

router.get('/:id', async (req, res) => {
    const horario = await Horario.findOne({ id: req.params.id });
    if (horario) {
        res.json(horario);
    } else {
        res.status(404).json({ error: "Horario no encontrado" });
    }
}
);

router.put('/:id', async (req, res) => {
    const actualizado = await Horario.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (actualizado) {
        res.json(actualizado);
    } else {
        res.status(404).json({ error: "No se encontró el horario para actualizar" });
    }

});

router.delete('/:id', async (req, res) => {
    const eliminado = await Horario.findOneAndDelete({ id: req.params.id });
    if (eliminado) {
        res.status(200).json({ mensaje: "Horario eliminado correctamente" });
    } else {
        res.status(404).json({ error: "No se encontró el horario" });
    }

});

module.exports = router;
