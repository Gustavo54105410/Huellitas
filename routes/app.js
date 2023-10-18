const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.use('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'login.html'));
});

app.use('/registro', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'registro.html'));
});

app.use((req, res, next) => {
    res.status(400).sendFile(path.join(__dirname, '../', '404.html'));
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto ', 3000);
});