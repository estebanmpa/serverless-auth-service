
# Migration Assistant Auth Server

## Table Of Contents##
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Github Environment Variables](#github-environment-variables)
  - [Project setup](#project-setup)
  - [Compile and run the project](#compile-and-run-the-project)
  - [Run tests](#run-tests)


### Getting Started ###

#### Environment Variables ####
Create .env file in the root of project with the following content.

```
LISTEN_PORT=      // Service listen port
GOOGLE_API_KEY=   // Google Cloud Service Account API Key
```

#### Github Environment Variables ####
Create github actions secrets.

```
GCP_PROJECT_ID=                // Google Cloud Project ID
GCP_CLOUD_BUILD_SERVICE_KEY=   // Google Cloud Service Account 
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
