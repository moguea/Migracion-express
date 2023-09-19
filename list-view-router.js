const express = require('express');
const router = express.Router();

// Ruta para obtener la lista de tareas (GET)
router.get('/tasks', (req, res) => {
  // Lógica para listar tareas (debe proporcionar la lista de tareas en formato JSON)
  // Ejemplo:
  const tasks = [
    { id: 1, description: 'Tarea 1', isCompleted: false },
    { id: 2, description: 'Tarea 2', isCompleted: true },
  ];
  res.json(tasks);
});

module.exports = router;

