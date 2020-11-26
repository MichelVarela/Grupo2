const express = require('express');
const router = express.Router();

//RUTAS
const creditos = require('../controllers/creditosController');

router.get('/', creditos.creditos);

module.exports = router;