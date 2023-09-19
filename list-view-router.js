const express = require('express');
const router = express.Router();

// Middleware para validar parámetros en la ruta
function handleInvalidParameters(req, res, next) {
  const { id } = req.params;

  // Agrega aquí la lógica para validar los parámetros según tus criterios
  if (!isValidParameter(id)) {
    return res.status(400).json({ error: 'Parámetros no válidos.' });
  }

  next();
}

// Ruta para obtener la lista de tareas (GET)
router.get('/tasks/:id', handleInvalidParameters, (req, res) => {
  // Agrega aquí la lógica para obtener la lista de tareas (debe proporcionar la lista de tareas en formato JSON)
  // Ejemplo:
  const tasks = [
    { id: 1, description: 'Tarea 1', isCompleted: false },
    { id: 2, description: 'Tarea 2', isCompleted: true },
  ];
  res.json(tasks);
});

module.exports = router;


