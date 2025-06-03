const express = require("express");
const router = express.Router();
const NotificacionSchema = require('../models/notificacion');

// Crear notificación
router.post('/notificacion', async (req, res) => {
  try {
    const nueva = new NotificacionSchema(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener notificaciones para un usuario
router.get('/notificacion/:idUsuario', async (req, res) => {
  try {
    const notificaciones = await NotificacionSchema.find({ usuarioReceptor: req.params.idUsuario })
      .populate('usuarioEmisor', 'nombre') 
      .sort({ createdAt: -1 });

    res.json(notificaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Marcar como leída
router.put('/notificacion/:id', async (req, res) => {
  try {
    const notificacion = await NotificacionSchema.findByIdAndUpdate(
      req.params.id,
      { leido: true },
      { new: true }
    );
    res.json(notificacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete('/notificacion/:id', async (req, res) => {
  try {
    const notificacionEliminada = await NotificacionSchema.findByIdAndDelete(req.params.id);
    
    if (!notificacionEliminada) {
      return res.status(404).json({ message: 'Notificación no encontrada' });
    }

    res.json({ message: 'Notificación eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;