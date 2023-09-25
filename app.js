
const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Lavar el coche', completed: true },
  // Agrega más tareas según sea necesario
];

// Endpoint para listar todas las tareas
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Endpoint para crear una nueva tarea
app.post('/tasks', (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'La descripción es requerida' });
  }

  const newTask = {
    id: tasks.length + 1,
    description,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Endpoint para obtener una sola tarea
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.status(200).json(task);
});

// Endpoint para actualizar una tarea
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  task.completed = !task.completed;
  res.status(200).json(task);
});

// Endpoint para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// ...
