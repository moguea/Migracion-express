const express = require('express');
const router = express.Router();


router.get('/completas', (req, res) => {
 
  res.send('Listado de tareas completas');
});


router.get('/incompletas', (req, res) => {
  // Lógica para listar tareas incompletas
  res.send('Listado de tareas incompletas');
});

module.exports = router;

