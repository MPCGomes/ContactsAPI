# ContactsAPI

[![Português](https://img.shields.io/badge/lang-portuguese-green.svg)](README_pt-br.md)

## Overview

ContactsAPI is a RESTful Node.js and Express.js application for managing a contact list with fields such as photoUrl, givenName, familyName, multiple phoneNumbers, emailAddresses, and events. This project uses TypeScript for static typing and MongoDB for database management. The API is documented using Swagger for easy interaction.

## Features

- **API First**: The API was designed and documented before the implementation of the code.
- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **Data Validation**: Ensures that contact data conforms to the specified schema using Mongoose.
- **Swagger Documentation**: Provides interactive API documentation using [Swagger UI](http://localhost:5500/api-docs) and [SwaggerHub API Documentation](https://app.swaggerhub.com/apis/MPCGOMES2/ContactsAPI/1.0.0).
- **Versioning**: Supports v1 and v2 endpoints.

## Technologies Used

- **Express.js**: Web framework for building the server-side.
- **MongoDB**: NoSQL database used for storing contact information.
- **Mongoose**: ODM (Object Data Modeling) library for defining schemas and interacting with MongoDB.
- **Node.js**: JavaScript runtime for building the server-side.
- **Postman**: Tool used for testing and interacting with the API.
- **Swagger Editor**: Tool for designing and documenting the API with the OpenAPI Specification.
- **SwaggerHub**: Platform for hosting and collaborating on the API documentation.
- **Swagger UI**: Tool for documenting and testing the API, providing an interactive interface.
- **TypeScript**: Superset of JavaScript that adds static typing to the server-side code.
- **YAMLJS**: Library for parsing YAML files, used to load the Swagger documentation.

## Prerequisites

- **Node.js**: v12.x or higher
- **npm**: v6.x or higher
- **MongoDB**: v4.x or higher

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/ContactsAPI.git
   cd ContactsAPI
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up TypeScript**:

   ```bash
   npx tsc
   ```

4. **Start MongoDB**:

   - **Windows/Mac/Linux**: Follow the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/).

5. **Start the server**:
   ```bash
   node dist/index.js
   ```
   
## API Endpoints

### v1 Endpoints

#### Create a New Contact

- **Method**: POST
- **URL**: `/api/v1/contacts`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "givenName": "John",
    "familyName": "Doe",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "john.doe@example.com", "type": "home" }]
  }
  ```

#### Get All Contacts

- **Method**: GET
- **URL**: `/api/v1/contacts`

#### Get Contact by ID

- **Method**: GET
- **URL**: `/api/v1/contacts/{contactId}`

#### Update a Contact

- **Method**: PUT
- **URL**: `/api/v1/contacts/{contactId}`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "givenName": "John",
    "familyName": "Doe",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "john.doe@example.com", "type": "home" }]
  }
  ```

#### Delete a Contact

- **Method**: DELETE
- **URL**: `/api/v1/contacts/{contactId}`

### v2 Endpoints

#### Create a New Contact

- **Method**: POST
- **URL**: `/api/v2/contacts`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "givenName": "Marcos",
    "familyName": "Gomes",
    "phoneNumbers": [{ "value": "+00 00 00000-0000", "type": "mobile" }],
    "emailAddresses": [{ "value": "marcos.gomes@example.com", "type": "home" }]
  }
  ```

#### Get All Contacts

- **Method**: GET
- **URL**: `/api/v2/contacts`

#### Get Contact by ID

- **Method**: GET
- **URL**: `/api/v2/contacts/{contactId}`

#### Update a Contact

- **Method**: PATCH
- **URL**: `/api/v2/contacts/{contactId}`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "givenName": "Marcos",
    "familyName": "Gomes",
    "phoneNumbers": [{ "value": "+00 00 0000-0000", "type": "work" }],
    "emailAddresses": [{ "value": "marcos.gomes@example2.com", "type": "work" }]
  }
  ```

#### Delete a Contact

- **Method**: DELETE
- **URL**: `/api/v2/contacts/{contactId}`

## Project Structure

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

## Postman Collection

To make it easier to test the API, you can import the Postman collections:

1. Download the [ContactsAPI V1 Postman Collection](./postman/ContactsAPI%20V1.postman_collection.json).
2. Download the [ContactsAPI V2 Postman Collection](./postman/ContactsAPI%20V2.postman_collection.json).
3. Open Postman.
4. Click on the **Import** button.
5. Select the downloaded `.json` files.
6. The collections will be imported, and you can start testing the API.

## License

This project is licensed under the MIT License.
