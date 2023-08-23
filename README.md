# API demo app with node and typescript

API rest basic demo with node, typescript and others technologies. This project is basic because has a educational purpose

## Problem 

I need learn how to create a API from scratch with minimal features and technologies, the principal focus of the project is not use complex frameworks, with this I hope understand the core concepts of the JS frameworks

## Proposed solution

Create a basic API with a basic architecture with node and typescript, on the future I will update the code adding new features

## Principal technologies

- Node
- Typescript
- Express and express validator
- TypeORM
- SQlite 3

## Project features

- Express server configuration
- API rest
- Database managment with TypeORM
- Routes configurations
- Validations in routes
- Use of middleware
- Environment variables with dotenv

## Database schema

|USERS              |               |
|:------------------|:--------------|
|   ID              |       NUMBER  |
|   FIRSTNAME       |       STRING  |
|   LASTNAME        |       STRING  |
|   AGE             |       NUMBER  |

## API endpoints

Here you found a interactive documentation with a public postman project

https://documenter.getpostman.com/view/6342282/2s9Y5VTP5g

### Get all users
---

Method: GET

URL: {{url}}/api/users


### Get user
---

Method: GET

URL: {{url}}/api/users/:id

### Post user
---

Method: POST

URL: {{url}}/api/users

```json
{
    "firstName": string,
    "lastName": string,
    "age": number
}
```

### Update user
---

Method: PUT

URL: {{url}}/api/users/:id

```json
{
    "firstName": string,
    "lastName": string,
    "age": number
}
```

### Delete user
---

Method: DELETE

URL: {{url}}/api/users/2

## How to use

```bash
npm install
npm run watch
npm start
```