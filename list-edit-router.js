const express = require('express');
const router = express.Router();

// Middleware para manejar errores en solicitudes POST y PUT
function handleInvalidRequest(req, res, next) {
  if ((req.method === 'POST' || req.method === 'PUT') && !req.body) {
    return res.status(400).json({ error: 'El cuerpo de la solicitud está vacío.' });
  }

  next();
}

// Ruta para crear una tarea (POST)
router.post('/crear', handleInvalidRequest, (req, res) => {
  // Lógica para crear una tarea
  res.send('Tarea creada exitosamente');
});

// Ruta para eliminar una tarea (DELETE)
router.delete('/eliminar/:id', (req, res) => {
  const taskId = req.params.id;
  // Lógica para eliminar una tarea por su ID
  res.send(`Tarea con ID ${taskId} eliminada`);
});

// Ruta para actualizar una tarea (PUT)
router.put('/actualizar/:id', handleInvalidRequest, (req, res) => {
  const taskId = req.params.id;
  // Lógica para actualizar una tarea por su ID
  res.send(`Tarea con ID ${taskId} actualizada`);
});

module.exports = router;
