/**
 * Especificação das rotas.
 */

// Import das bibliotecas
const express = require('express');

// Import das bibliotecas próprias
const {
    getLista,
    getCliente,
    inserir,
    alterar,
    excluir
} = require("./clienterecurso");

// Inicializa o roteador dos serviços
const router = express.Router();

/**
 * Serviço da rota inicial.
 *
 * curl http://localhost:8000
 */
router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "API CRUD Cliente Rodando"
    })
});

/**
 * Serviço que retorna a lista de cliente.
 *
 * curl http://localhost:8000/cliente
 */
router.get('/cliente', getLista);

/**
 * Serviço que retorna um cliente.
 *
 * curl http://localhost:8000/cliente/1
 */
router.get('/cliente/:clienteId', getCliente);

/**
 * Serviço que insere um cliente.
 *
 * curl -v -X POST -H "Content-Type: application/json" -d "{\"clienteId\":\"1\", \"nome\":\"Pedro\",\"cpf\":\"45678912399\"}" http://localhost:8000/cliente
 */
router.post('/cliente', inserir);

/**
 * Serviço que altera um cliente.
 *
 * curl -v -X PUT -H "Content-Type: application/json" -d "{\"clienteId\":\"1\",\"nome\":\"Antônio\",\"cpf\":\"45678912399\"}" http://localhost:8000/cliente/1
 */
router.put('/cliente/:clienteId', alterar);

/**
 * Serviço que exclui um cliente.
 *
 * curl -v -X DELETE http://localhost:8000/cliente/1
 */
router.delete('/cliente/:clienteId', excluir);

// Exporta o roteador
module.exports = router;