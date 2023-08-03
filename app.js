const express = require('express');
const app = express();

const tasks = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "789012",
    isCompleted: false,
    description: "Buy groceries",
  },
  
];


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
