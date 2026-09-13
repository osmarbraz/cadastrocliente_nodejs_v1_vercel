/**
 * Configurações e conexão com o banco de dados.
 */

// Importa a biblioteca dotenv, responsável por carregar
// as variáveis de ambiente armazenadas no arquivo .env
const dotenv = require('dotenv');

// Carrega as variáveis do arquivo .env para o objeto process.env
dotenv.config();

// Essa função permite estabelecer a conexão com um banco
// de dados PostgreSQL hospedado no Neon.
const { neon } = require('@neondatabase/serverless');

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
async function createDbConnection() {

  // Cria a conexão com o banco de dados utilizando a string
  // de conexão armazenada na variável de ambiente DATABASE_URL.
  const sql = neon(process.env.DATABASE_URL);

  console.log("Conexão com PostgreSQL foi estabelecida");

  createTable(sql);  

  return sql;
}

/**
 * Cria a tabela de cliente se não existir.
 * 
 * @param {*} db 
 */
async function createTable(db) {
     try {
      await db`CREATE TABLE cliente (
            clienteId INTEGER, 
            nome VARCHAR(100), 
            cpf VARCHAR(11), 
            CONSTRAINT pk_cliente PRIMARY KEY (clienteId));`;
      console.log("Tabela cliente criada");
    } catch (error) {
      console.log("Tabela cliente já existe");
    }
  }

// Inicializa a conexão e criação da tabela

module.exports = sql;