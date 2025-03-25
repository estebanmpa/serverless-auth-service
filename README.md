
# Migration Assistant Auth Server
This example microservice is deployed in Google Cloud Run using Google Cloud Build and Github Actions pipelines.
The pipeline authenticates first with Google, uploads code to a bucket in order to create the image in Artifact Registry, then the image is deployed to Cloud Run.

This service authenticates users in Google Identity Platform.

## Table Of Contents##
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Github Environment Variables](#github-environment-variables)
  - [Google Cloud Setup](#google-cloud-setup)
  - [Project setup](#project-setup)
  - [Compile and run the project](#compile-and-run-the-project)
  - [Run tests](#run-tests)
- [Example Run](#example-run)


## Getting Started ##

### Environment Variables ###
Create .env file in the root of project with the following content.

```
LISTEN_PORT=      // Service listen port
GOOGLE_API_KEY=   // Google Cloud Service Account API Key
```

### Github Environment Variables ###
Create github actions secrets.

```
GCP_PROJECT_ID=                // Google Cloud Project ID
GCP_CLOUD_BUILD_SERVICE_KEY=   // Google Cloud Service Account 
```
### Google Cloud Setup ###

* Create a Service Account to access Cloud Build from Github Actions.
Roles:
    * Cloud Build Service Account

* A second Service Account is created autmaticaly to access internal services.
Make sure it has the next roles:
    * Artifact Registry Create-on-Push Writer
    * Artifact Registry Writer
    * Cloud Build Editor
    * Cloud Functions Developer
    * Cloud Run Service Agent
    * Storage Object User

* Enable Cloud Run Admin API
* Create api key restricted to Identity Toolkit API and use that key in GOOGLE_API_KEY environment variable.
* Create some users in Identity Platform using email/password as a provider.
* Just for tests purposes, once the Cloud Run function is deployed set Authentication to Allow unauthenticated.

### Project setup ###

```bash
$ yarn install
```

### Compile and run the project ###

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Run tests ###

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Example Run ##
POST <cloud-run-url>/auth/login
```
{
    "email": "testuser@gcp.com",
    "password": "123456"
}
```