const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');
const MotoristaController = require('./controllers/MotoristaController');
const EntradaController = require('./controllers/EntradaController');
const SaidasController = require('./controllers/SaidasController');



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
router.put('/entrada/alterar', EntradaController.alterar);
router.delete('/entrada/:id_in', EntradaController.excluir);

router.get('/saidas', SaidasController.buscarTodos);
router.get('/saida/:id_out', SaidasController.buscarUm);
router.post('/saida', SaidasController.inserir);
router.put('/saida/alterar', SaidasController.alterar);
router.delete('/saida/:id_out', SaidasController.excluir);

module.exports = router;

