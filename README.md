## Description

CRUD with GraphQL postgres using NestJs Freamwork

## Useful notes

```bash
# Install it using below command
  npm i -g @nestjs/cli
```

```bash
# create new project use below command
  npx nest new project-name
```

```bash
# To create a resolver using the CLI, simply execute the below command
  npx nest g resolver resolver_name
```

```bash
# To create a service using the CLI, simply execute the below command
  npx nest g service service_name
```

```bash
# To create a module using the CLI, simply execute the below command
  npx nest g module module_name
```

## GraphQL Queries

```bash
# to get all book data
{
  findAll {
    ID
    Author
    Name
  }
}

# to create new book along with the author
mutation {
  createBook(bookData:
  {
    Name: "51 Days",
    Author: "Edward Parker"
  }) {
    Author
    Name
  }
}

```

## Installation

```bash
$ npm install
```

## Notes for the GraphQL

```bash
# if you want to go code first then pass  autoSchemaFile: join(process.cwd(), 'src/schema.gql')
# in the main module under the forRoot option.
# also we can pass driver as ApolloDriver and playground to be true
# please see below for the example
GraphQLModule.forRoot({
  driver: ApolloDriver,
  debug: true,
  playground: true,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
})
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
