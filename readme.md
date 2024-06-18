### 🏨 EasyHotel API

Bem-vindo à **EasyHotel API**! Esta é uma API RESTful para gerenciamento de reservas de hotel e tarefas de afazeres, construída com Node.js, Express, Sequelize e MySQL. Abaixo, você encontrará todas as informações necessárias para começar a usar esta API.

### 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Dotenv

### 📦 Instalação

1. **Instale as dependências:**
   ```sh
   npm install
   ```

2. **Configure o banco de dados:**
   - Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do MySQL:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=sua-senha
     DB_NAME=hotel_reservations
     DB_DIALECT=mysql
     ```

3. **Execute as migrações para criar as tabelas no banco de dados:**
   ```sh
   npx sequelize-cli db:migrate
   ```

4. **Inicie o servidor:**
   ```sh
   npm start
   ```
   O servidor estará rodando em `http://localhost:3000`.

### 📋 Endpoints da API

#### 📅 Reservas

- **Criar uma nova reserva**
  - `POST /api/reservations`
  - Body:
    ```json
    {
      "guestName": "Wallace Barros",
      "roomNumber": 99,
      "checkInDate": "2024-07-01",
      "checkOutDate": "2024-07-05"
    }
    ```

- **Listar todas as reservas**
  - `GET /api/reservations`

- **Obter uma reserva específica**
  - `GET /api/reservations/:id`

- **Atualizar uma reserva existente**
  - `PUT /api/reservations/:id`
  - Body:
    ```json
    {
      "guestName": "Wallace Barros",
      "roomNumber": 100,
      "checkInDate": "2024-09-28",
      "checkOutDate": "2024-12-15"
    }
    ```

- **Excluir uma reserva**
  - `DELETE /api/reservations/:id`

#### 📌 Tarefas

- **Criar uma nova tarefa**
  - `POST /api/tasks`
  - Body:
    ```json
    {
      "title": "Tarefa 1",
      "description": "Descrição da tarefa 1",
      "completed": false
    }
    ```

- **Listar todas as tarefas**
  - `GET /api/tasks`

- **Obter uma tarefa específica**
  - `GET /api/tasks/:id`

- **Atualizar uma tarefa existente**
  - `PUT /api/tasks/:id`
  - Body:
    ```json
    {
      "title": "Tarefa 1 Atualizada",
      "description": "Descrição da tarefa 1 atualizada",
      "completed": true
    }
    ```

- **Excluir uma tarefa**
  - `DELETE /api/tasks/:id`

### 🚀 Como Testar com Postman

1. **Crie uma nova coleção no Postman.**
2. **Adicione os endpoints acima como requisições dentro da coleção.**
3. **Envie as requisições para testar as operações CRUD.**

### 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Wallace Barros](https://github.com/wallbarros)