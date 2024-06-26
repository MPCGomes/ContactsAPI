# ContactsAPI

[![English](https://img.shields.io/badge/lang-english-red.svg)](README.md)

## Visão Geral

ContactsAPI é uma aplicação RESTful Node.js e Express.js para gerenciar uma lista de contatos com campos como photoUrl, givenName, familyName, múltiplos phoneNumbers, emailAddresses e events. Este projeto utiliza TypeScript para tipagem estática e MongoDB para gerenciamento de banco de dados. A API é documentada usando Swagger para facilitar a interação.

## Funcionalidades

- **API First**: A API foi projetada e documentada antes da implementação do código.
- **Operações CRUD**: Criar, Ler, Atualizar e Deletar contatos.
- **Validação de Dados**: Garante que os dados do contato estejam em conformidade com o esquema especificado usando Mongoose.
- **Documentação Swagger**: Fornece documentação de API interativa usando [Swagger UI](http://localhost:5500/api-docs) e [Documentação da API no SwaggerHub](https://app.swaggerhub.com/apis/MPCGOMES2/ContactsAPI/1.0.0).
- **Versionamento**: Suporta endpoints v1 e v2.

## Tecnologias Utilizadas

- **Express.js**: Framework web para construção do lado do servidor.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações de contato.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para definir esquemas e interagir com o MongoDB.
- **Node.js**: Ambiente de execução JavaScript para construção do lado do servidor.
- **Postman**: Ferramenta usada para testar e interagir com a API.
- **Swagger Editor**: Ferramenta para projetar e documentar a API com a Especificação OpenAPI.
- **SwaggerHub**: Plataforma para hospedar e colaborar na documentação da API.
- **Swagger UI**: Ferramenta para documentar e testar a API, fornecendo uma interface interativa.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código do servidor.
- **YAMLJS**: Biblioteca para analisar arquivos YAML, usada para carregar a documentação Swagger.

## Pré-requisitos

- **Node.js**: v12.x ou superior
- **npm**: v6.x ou superior
- **MongoDB**: v4.x ou superior

## Instalação

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/your-username/ContactsAPI.git
   cd ContactsAPI
   ```

2. **Instalar dependências**:
   ```bash
   npm install
   ```

3. **Configurar o TypeScript**:
   ```bash
   npx tsc
   ```

4. **Iniciar o MongoDB**:
   - **Windows/Mac/Linux**: Follow the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

5. **Iniciar servidor**:
   ```bash
   node dist/index.js
   ```

## Endpoints da API

### Endpoints da v1

#### Criar um Novo Contato

- **Método**: POST
- **URL**: `/api/v1/contacts`
- **Cabeçalhos**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "givenName": "John",
    "familyName": "Doe",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "john.doe@example.com", "type": "home" }]
  }
  ```

#### Obter Todos os Contatos

- **Método**: GET
- **URL**: `/api/v1/contacts`

#### Obter Contato por ID

- **Método**: GET
- **URL**: `/api/v1/contacts/{contactId}`

#### Atualizar um Contato

- **Método**: PUT
- **URL**: `/api/v1/contacts/{contactId}`
- **Cabeçalhos**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "givenName": "John",
    "familyName": "Doe",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "john.doe@example.com", "type": "home" }]
  }
  ```

#### Deletar um Contato

- **Método**: DELETE
- **URL**: `/api/v1/contacts/{contactId}`

### Endpoints da v2

#### Criar um Novo Contato

- **Método**: POST
- **URL**: `/api/v2/contacts`
- **Cabeçalhos**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "givenName": "Marcos",
    "familyName": "Gomes",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "marcos.gomes@example.com", "type": "home" }]
  }
  ```

#### Obter Todos os Contatos

- **Método**: GET
- **URL**: `/api/v2/contacts`

#### Obter Contato por ID

- **Método**: GET
- **URL**: `/api/v2/contacts/{contactId}`

#### Atualizar um Contato

- **Método**: PATCH
- **URL**: `/api/v2/contacts/{contactId}`
- **Cabeçalhos**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "givenName": "Marcos",
    "familyName": "Gomes",
    "phoneNumbers": [{ "value": "+00 00 0000-0000", "type": "work" }],
    "emailAddresses": [{ "value": "marcos.gomes@example2.com", "type": "work" }]
  }
  ```

#### Deletar um Contato

- **Método**: DELETE
- **URL**: `/api/v2/contacts/{contactId}`

## Estrutura do Projeto

```
.
├── node_modules
├── src
│   ├── controllers
│   │   ├── v1
│   │   │   └── contactController.ts
│   │   ├── v2
│   │   │   └── contactController.ts
│   ├── daos
│   │   ├── v1
│   │   │   └── contactDAO.ts
│   │   ├── v2
│   │   │   └── contactDAO.ts
│   ├── dtos
│   │   ├── v1
│   │   │   └── contactDTO.ts
│   │   ├── v2
│   │   │   └── contactDTO.ts
│   ├── models
│   │   └── contact.ts
│   ├── repositories
│   │   └── contactRepository.ts
│   ├── routes
│   │   ├── v1
│   │   │   └── contactRoutes.ts
│   │   ├── v2
│   │   │   └── contactRoutes.ts
│   ├── services
│   │   ├── v1
│   │   │   └── contactService.ts
│   │   ├── v2
│   │   │   └── contactService.ts
│   ├── utils
│   │   └── swagger.ts
│   └── index.ts
├── postman
│   ├── ContactsAPI V1.postman_collection.json
│   ├── ContactsAPI V2.postman_collection.json
├── swagger.yaml
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Coleção do Postman

Para facilitar o teste da API, você pode importar as coleções do Postman:

1. Baixe a [Coleção do Postman do ContactsAPI V1](./postman/ContactsAPI%20V1.postman_collection.json).
2. Baixe a [Coleção do Postman do ContactsAPI V2](./postman/ContactsAPI%20V2.postman_collection.json).
3. Abra o Postman.
4. Clique no botão **Importar**.
5. Selecione os arquivos `.json` baixados.
6. As coleções serão importadas e você poderá começar a testar a API.

## Licença

Este projeto é licenciado sob a Licença MIT.
