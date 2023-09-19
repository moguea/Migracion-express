const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listEditRouter = require('./list-edit-router');
const listViewRouter = require('./list-view-router');

app.use(bodyParser.json());

// Middleware para gestionar solicitudes por métodos HTTP válidos
function handleValidMethods(req, res, next) {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (!validMethods.includes(req.method)) {
    return res.status(405).json({ error: 'Método HTTP no permitido' });
  }

  next();
}

app.use(handleValidMethods);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Tareas');
});

// Montar los enrutadores
app.use('/list/edit', listEditRouter);
app.use('/list/view', listViewRouter); // Aquí es donde se monta el enrutador correcto

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
