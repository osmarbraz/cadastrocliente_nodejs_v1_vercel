# Programa servidor API-REST do CRUD de Cliente utilizando Node.js e Vercel Postgres.

## Descrição
- O projeto foi desenvolvido no VSCodde deve ser chamado cliente_nodejs_v1_vercel.
- Programa cliente está no projeto "cadastrocliente_reactjs_v1_vercel".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela cliente possui os campos clienteId, nome e cpf.

## Dependências
- express,
- cors,
- dotenv
- @vercel/postgres.

## Execução
   <pre><code>npm start</code></pre>

## Atualização
   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>      

## Arquivos fontes do projeto em src
- index.js - Programa principal com o servidor Express.
- clienterecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
- dbconfig.js - Contêm as configurações e conexão com o banco de dados.
- servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

## Vercel
    https://cadastrocliente-nodejs-v1-vercel.vercel.app/ 

## Serviços
    Substitua localhost:8080 pelo endereço do servidor.

- Serviço que retorna via GET a lista de cliente.<br>
    http://localhost:8000/clientes

- Serviço que retorna via GET um cliente.<br>
    substitua \<ID\> por um id de um cliente.<br>
    http://localhost:8000/cliente/<ID\>

- Serviço que insere via POST um cliente.<br>
    http://localhost:8000/cliente<br>
    Enviar um JSON com os campos clienteId, nome e cpf.
    Content-Type: application/json -d {"clienteId":"1", "nome":"Pedro","cpf":"45678912399"}

- Serviço que atualiza via PUT um cliente.<br>
    http://localhost:8000/cliente<br>
    Enviar um JSON com os campos clienteId, nome e cpf.
    Content-Type: application/json -d {"clienteId":"1", "nome":"Pedro","cpf":"45678912399"}
    
- Serviço que exclui via DELETE um cliente.<br>
    Substitua \<ID\> por um id de um cliente.<br>
    http://localhost:8000/cliente/<ID\>
