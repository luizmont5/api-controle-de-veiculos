const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');
const MotoristaController = require('./controllers/MotoristaController');

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




module.exports = router;

