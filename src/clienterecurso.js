/**
 * Métodos de acesso aos dados de cliente no banco de dados.
 */

// Import das bibliotecas próprias
const db = require("./dbconfig");

const { sql } = require ('@vercel/postgres');

// Retorna uma lista com todos os clientes
const getLista = async (request, response) => {   
   
    const { rows } = await sql`SELECT clienteId, nome, cpf FROM cliente order by clienteId;`;

    response.status(200).json(rows);
 
};

// Procura um cliente pelo id
const getCliente = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);

    const { rows } = await sql`SELECT clienteid, nome, cpf FROM cliente where clienteid = ${clienteId};`;

    response.status(200).json(rows[0]);
};

// Insere um novo cliente
const inserir = async (request, response) => {
    const { clienteId, nome, cpf } = request.body ;  
    
    const { rows } = await sql`INSERT INTO CLIENTE (clienteid, nome, cpf) VALUES (${clienteId}, ${nome}, ${cpf});`;

    response.status(201).json({ message: `Cliente inserido com clienteId: ${clienteId}` })
    
};

// Altera um cliente pelo clienteId
const alterar = async (request, response) => {    
    const clienteId = parseInt(request.params.clienteId);
    const { nome, cpf } = request.body;    

    const { rows } = await sql`UPDATE CLIENTE SET nome = ${nome}, cpf = ${cpf} WHERE clienteid = ${clienteId};`;
    
    response.status(200).json( { message: `Cliente alterado com clienteId: ${clienteId}` });    
};
   

// Exclui um cliente pelo clienteId
const excluir = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);

    const { rows } = await sql`DELETE FROM cliente where clienteid = ${clienteId};`;

    response.status(200).json( { message: `Cliente excluído com clienteId: ${clienteId}` });
};

// Exporta as funções
module.exports = {
    getLista,
    getCliente,
    inserir,
    alterar,
    excluir
};