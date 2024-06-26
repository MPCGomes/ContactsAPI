# ContactsAPI

[![Português](https://img.shields.io/badge/lang-portuguese-green.svg)](README_pt-br.md)

## Overview

ContactsAPI is a RESTful Node.js and Express.js application for managing a contact list with fields such as photoUrl, givenName, familyName, multiple phoneNumbers, emailAddresses, and events. This project uses TypeScript for static typing and MongoDB for database management. The API is documented using Swagger for easy interaction.

## Features

- **API First**: The API was designed and documented before the implementation of the code.
- **CRUD Operations**: Create, Read, Update, and Delete contacts.
- **Data Validation**: Ensures that contact data conforms to the specified schema using Mongoose.
- **Swagger Documentation**: Provides interactive API documentation using [Swagger UI](http://localhost:5500/api-docs) and [SwaggerHub API Documentation](https://app.swaggerhub.com/apis/MPCGOMES2/ContactsAPI/1.0.0).

## Technologies Used

- **Express.js**: Web framework for building the server-side.
- **MongoDB**: NoSQL database used for storing contact information.
- **Mongoose**: ODM (Object Data Modeling) library for defining schemas and interacting with MongoDB.
- **Node.js**: JavaScript runtime for building the server-side.
- **Postman**: Tool used for testing and interacting with the APIs.
- **Swagger Editor**: Tool for designing and documenting the APIs with the OpenAPI Specification.
- **SwaggerHub**: Platform for hosting and collaborating on the API documentation.
- **Swagger UI**: Tool for documenting and testing the APIs, providing an interactive interface.
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

### Create a New Contact

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

### Get All Contacts

- **Method**: GET
- **URL**: /api/v1/contacts

### Get Contact by ID

- **Method**: GET
- **URL**: /api/v1/contacts/{contactId}

### Update a Contact

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

### Delete a Contact

- **Method**: DELETE
- **URL**: /api/v1/contacts/{contactId}

## Project Structure

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

## License

This project is licensed under the MIT License.
