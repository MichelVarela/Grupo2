const express = require('express');
const router = express.Router();

//RUTAS
const heroes = require('../controllers/heroesController');

router.get('/', heroes.index);
router.get('/detalle/:id', heroes.detalle);
router.get('/detalle/bio/:id/:ok?', heroes.bio);

module.exports = router;