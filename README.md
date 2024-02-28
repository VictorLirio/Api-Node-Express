### Projeto de Criação de uma API usando Node.js e Express
Este é um projeto de exemplo para demonstrar como criar uma API simples usando Node.js e Express.


## 🛠 Instalação
- Clone este repositório:
- git clone https://github.com/seu-usuario/nome-do-repositorio.git

Acesse o diretório do projeto:
cd nome-do-repositorio

**⚠️** Instale as dependências:
- npm install

### 👩‍💻 Configuração
- Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
PORT=3000
MONGODB_URI=sua-url-do-banco-de-dados
- PORT: Porta em que a aplicação será executada localmente.
- MONGODB_URI: URL de conexão com o banco de dados MongoDB.
**⚠️** Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

## 💻 Uso
- Para iniciar o servidor, execute:
- npm start
- Acesse a API em http://localhost:3000.

## 🏗️Endpoints
A API possui os seguintes endpoints:

- GET /api/tasks: Retorna todos as tasks.
- GET /api/tasks/:id: Retorna uma task específica com o ID fornecido.
- POST /api/tasks: Cria uma nova task.

## 🏁 Corpo da requisição:
json
{
  "nome": "Nome da task",
  "preco": 10.99,
  "descricao": "Descrição da task"
}

- PUT /api/tasks/:id: Atualiza uma task existente com o ID fornecido.

## 🏁 Corpo da requisição (mesmo formato que o POST).
- DELETE /api/tasks/:id: Exclui uma task existente com o ID fornecido.

## 💝 Contribuição
Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir com melhorias para este projeto. Basta abrir uma issue ou enviar um pull request.

## 📄 Licença
Este projeto está licenciado sob a MIT License.
