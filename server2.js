const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let clientes = [];
let pets = [];
//Rotas para clientes
app.get('/api/clientes', (req, res) => {
 res.json(clientes.slice(0, 20));
});

app.post('/api/clientes', (req, res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json(cliente);
});
//Rotas para pets
app.get('/api/pets', (req, res) => {
   res.json(pets.slice(0, 20));
});

app.post('/api/pets', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).json(pet);
});
// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
