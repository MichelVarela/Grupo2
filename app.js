const express = require('express');
const app = express();

//RUTAS
const main = require('./routes/main');
const heroes = require('./routes/heroes');
const creditos = require('./routes/creditos');

app.use('/', main);
app.use('/heroes', heroes);
app.use('/creditos', creditos);

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));