# URL Alias

This is monorepo which contains multiple `packages`:

- [@alias/client](./packages/client/README.md)
- [@alias/server](./packages/server/README.md)

## Prerequisite

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)
- [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)

## Install dependencies

```
nvm install
yarn install
```

## Local Development

To start locally (uses docker for mongodb):

```
yarn start
```

## Production build

```
docker-compose build
docker-compose up

# when setup is done (check terminal)
# web ui is available on localhost:8080
```
