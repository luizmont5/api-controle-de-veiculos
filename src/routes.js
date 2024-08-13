const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');
const MotoristaController = require('./controllers/MotoristaController');
const EntradaController = require('./controllers/EntradaController');


router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.excluir);

router.get('/motoristas', MotoristaController.buscarTodos);
router.get('/motorista/:id_mot', MotoristaController.buscarUm);
router.post('/motorista', MotoristaController.inserir);
router.put('/motorista/:id_mot', MotoristaController.alterar);
router.delete('/motorista/:id_mot', MotoristaController.excluir);

router.get('/entradas', EntradaController.buscarTodos);
router.get('/entrada/:id_in', EntradaController.buscarUm);
router.post('/entrada', EntradaController.inserir);
router.put('/entrada/:id_in', EntradaController.alterar);
router.delete('/entrada/:id_in', EntradaController.excluir);

module.exports = router;

