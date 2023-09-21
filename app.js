const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();
dotenv.config(); 

app.use(express.json());

// Usuarios predefinidos (esto puede reemplazarse por una base de datos)
const users = [
  { id: 1, username: 'usuario1', password: 'contraseña1' },
  { id: 2, username: 'usuario2', password: 'contraseña2' },
  // Agrega más usuarios según sea necesario
];

// Ruta de autenticación (login)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar las credenciales del usuario
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Generar un token JWT
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Middleware para verificar el token JWT en las rutas protegidas
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de autorización no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.user = user;
    next();
  });
}

app.get('/ruta-protegida', authenticateToken, (req, res) => {
  res.json({ message: 'Esta es una ruta protegida', user: req.user });
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Puerto de escucha
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);

});