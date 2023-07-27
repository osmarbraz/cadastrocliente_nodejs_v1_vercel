/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const { sql } = require ('@vercel/postgres');

const dotenv = require('dotenv');
dotenv.config();

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
async function createDbConnection() {
    
  console.log("Conexão com PostgreSQL foi estabelecida");

  createTable(sql);  

  return sql;
}

/**
 * Cria a tabela de cliente se não existir.
 * 
 * @param {*} db 
 */
function createTable(db) {
     try {
      db`create table CLIENTE (
            clienteId integer, 
            nome varchar(100), 
            cpf varchar(11), 
            CONSTRAINT PK_CLIENTE PRIMARY KEY (clienteId));`;
      console.log("Tabela cliente criada");
    } catch (error) {
      console.log("Tabela já existe");
    }
  }

module.exports = createDbConnection();