# ContactsAPI

[![English](https://img.shields.io/badge/lang-english-red.svg)](README.md)

## Visão Geral

ContactsAPI é uma aplicação RESTful Node.js e Express.js para gerenciar uma lista de contatos com campos como foto, nome, empresa, múltiplos números de telefone, e-mails e datas significativas. Este projeto usa TypeScript para digitação estática e MongoDB para gerenciamento de banco de dados.

## Características

- **API First**: A API foi projetada e documentada antes da implementação do código.
- **Operações CRUD**: Criar, ler, atualizar e excluir contatos.
- **Validação de dados**: Garante que os dados de contato estejam em conformidade com o esquema especificado usando o Mongoose.
- **Documentação do Swagger**: Fornece documentação de API interativa usando [Swagger UI](http://localhost:5500/api-docs) e [Documentação da API SwaggerHub](https://app.swaggerhub.com/apis/MPCGOMES2/ContatosAPI/1.0.0).

## Tecnologias Usadas

- **Express.js**: Estrutura Web para construção do lado do servidor.
- **MongoDB**: Banco de dados NoSQL usado para armazenar informações de contato.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para definição de esquemas e interação com MongoDB.
- **Node.js**: Tempo de execução JavaScript para construção do lado do servidor.
- **Postman**: Ferramenta utilizada para testes e interação com as APIs.
- **Swagger Editor**: Ferramenta para projetar e documentar as APIs com a especificação OpenAPI.
- **SwaggerHub**: Plataforma para hospedagem e colaboração na documentação da API.
- **Swagger UI**: Ferramenta para documentar e testar as APIs, fornecendo uma interface interativa.
- **TypeScript**: Superconjunto de JavaScript que adiciona digitação estática ao código do lado do servidor.
- **YAMLJS**: Biblioteca para análise de arquivos YAML, usada para carregar a documentação do Swagger.

## Pré-requisitos

- **Node.js**: v12.x or higher
- **npm**: v6.x or higher
- **MongoDB**: v4.x or higher

## Instalação

1. **Clonar repositório**:
   ```bash
   git clone https://github.com/your-username/ContactsAPI.git
   cd ContactsAPI
   ```

2. **Instalar dependências**:
   ```bash
   npm install
   ```

3. **Configurar TypeScript**:
   ```bash
   npx tsc
   ```

4. **Iniciar MongoDB**:
   - **Windows/Mac/Linux**: Follow the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

5. **Iniciar servidor**:
   ```bash
   node dist/index.js
   ```

## API Endpoints

### Criar Novo Contato

- **Method**: POST
- **URL**: /api/v1/contacts
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "firstName": "Alice",
    "lastName": "Johnson",
    "picture": "http://example.com/picture3.jpg",
    "company": "Example LLC",
    "phone": [
      {
        "number": "5555555555",
        "label": "Home"
      }
    ],
    "email": [
      {
        "address": "alice.johnson@example.com",
        "label": "Home"
      }
    ],
    "significantDate": [
      {
        "date": "2000-03-03T00:00:00Z",
        "label": "Other"
      }
    ]
  }
  ```

### Obter Todos os Contatos

- **Method**: GET
- **URL**: /api/v1/contacts

### Obter Contato por ID

- **Method**: GET
- **URL**: /api/v1/contacts/{contactId}

### Atualizar Contato

- **Method**: PUT
- **URL**: /api/v1/contacts/{contactId}
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "firstName": "Alice",
    "lastName": "Johnson",
    "picture": "http://example.com/picture3.jpg",
    "company": "Example LLC",
    "phone": [
      {
        "number": "5555555555",
        "label": "Home"
      }
    ],
    "email": [
      {
        "address": "alice.johnson@example.com",
        "label": "Home"
      }
    ],
    "significantDate": [
      {
        "date": "2000-03-03T00:00:00Z",
        "label": "Other"
      }
    ]
  }
  ```

### Deletar Contato

- **Method**: DELETE
- **URL**: /api/v1/contacts/{contactId}

## Estrutura do Projeto

```
.
├── node_modules
├── src
│   ├── controllers
│   │   └── contactController.ts
│   ├── models
│   │   └── contact.ts
│   ├── routes
│   │   └── contactRoutes.ts
│   ├── utils
│   │   └── swagger.ts
│   └── index.ts
├── swagger.yaml
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Licença

Este projeto está licenciado sob a licença MIT.
