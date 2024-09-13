const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');
const MotoristaController = require('./controllers/MotoristaController');
const EntradaController = require('./controllers/EntradaController');
const SaidasController = require('./controllers/SaidasController');



router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/alterar', CarroController.alterar);
router.delete('/carro/remove', CarroController.excluir);

router.get('/motoristas', MotoristaController.buscarTodos);
router.get('/motorista/:id_mot', MotoristaController.buscarUm);
router.post('/motorista', MotoristaController.inserir);
router.put('/motorista/alterar', MotoristaController.alterar);
router.delete('/motorista/remove', MotoristaController.excluir);

router.get('/entradas', EntradaController.buscarTodos);
router.get('/entrada/:id_in', EntradaController.buscarUm);
router.post('/entrada', EntradaController.inserir);
router.put('/entrada/alterar', EntradaController.alterar);
router.delete('/entrada/remove', EntradaController.excluir);

router.get('/saidas', SaidasController.buscarTodos);
router.get('/saida/:id_out', SaidasController.buscarUm);
router.post('/saida', SaidasController.inserir);
router.put('/saida/alterar', SaidasController.alterar);
router.delete('/saida/remove', SaidasController.excluir);

module.exports = router;

