const express = require('express');
const app = express();
const port = 4221;

// Базовый HTTP для взаимо
app.use(express.json());

// Маршрут для проверки работы сервера
app.get('/', (req, res) => {
  res.send('42');
});

// Массив для хранения данных
let data = [];

// Маршрут для получения данных
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Маршрут для добавления данных
app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен http://localhost:${port}`);
});
