const express = require('express');
const router = express.Router();


router.post('/crear', (req, res) => {
 
  res.send('Tarea creada exitosamente');
});


router.delete('/eliminar/:id', (req, res) => {
  const taskId = req.params.id;
  // Lógica para eliminar una tarea por su ID
  res.send(`Tarea con ID ${taskId} eliminada`);
});


router.put('/actualizar/:id', (req, res) => {
  const taskId = req.params.id;
  // Lógica para actualizar una tarea por su ID
  res.send(`Tarea con ID ${taskId} actualizada`);
});

module.exports = router;
