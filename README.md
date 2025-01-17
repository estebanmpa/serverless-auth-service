
# Migration Assistant Auth Server

## Table Of Contents##
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Project setup](#project-setup)
  - [Compile and run the project](#compile-and-run-the-project)
  - [Run tests](#run-tests)


### Getting Started ###

#### Environment Variables ####
Create .env file in the root of project with the following content.

```
LISTEN_PORT=
GOOGLE_API_KEY=
```

#### Project setup ####

```bash
$ yarn install
```

#### Compile and run the project ####

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

#### Run tests ####

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
