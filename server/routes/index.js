const express = require('express');
const operationController = require('../controller/operations');

const router = express.Router();

router.post('/recursos', operationController.criarRecurso)
router.get('/recursos', operationController.pegarTodosRecursos)
router.get('/recursos', operationController.pegarRecursoEspecifico)
router.put('/recursos/:id', operationController.editarRecurso)
router.delete('/recursos/:id', operationController.deletarRecurso)

module.exports = router