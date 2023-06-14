const express = require("express");
const router = express.Router();
const homeController = require('../../controllers/homeController');
const calculadoraController = require('../../controllers/calculadoraController');

router.get('/', homeController.index )
router.get('/calculadora', calculadoraController.calculo)
router.post('/calculadora', calculadoraController.calculoResultado)




module.exports = router;