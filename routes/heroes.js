const express = require('express');
const router = express.Router();

const heroesController = require('../controllers/heroesController');

router.get('/',heroesController.lista);
router.get('/detalle/:id',heroesController.detalle);
router.get('/bio/:id/:ok?',heroesController.detalleBio )
module.exports = router;