const express = require('express');
const operationController = require('../controller/operations');

const router = express.Router();

router.post('/recursos', operationController.criarRecurso)
router.get('/recursos', operationController.pegarTodosRecursos)
router.put('/recursos/:id', operationController.editarRecurso)
router.delete('/recursos/:id', operationController.deletarRecurso)
router.get('/tipos', operationController.pegarTodosTipos)

module.exports = router