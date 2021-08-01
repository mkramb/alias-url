# URL Alias

This is monorepo which contains application `packages`:

- [@alias/client](./packages/client/README.md)
- [@alias/server](./packages/server/README.md)

And supporting tests:
- [@alias/tests-integration](./packages/tests-integration/README.md)

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

To start locally, which uses docker (only) for mongodb:

```
yarn start
yarn test
```

## Production build

```
docker-compose build
docker-compose up

# when setup is done (check terminal)
# web ui is available on localhost:8000
```

## Integrations tests

- Bring up an instance
- Execute integration tests:

```
cd packages/tests-integration
yarn test
```

## Useful Docs

- [Why Monorepo?](./docs/monorepo.md)
- [Type Safety](./docs/types.md)


## TODO

- More test & increase coverage (also maybe adding performance test)
- Better UX and E2E tests for happy path
- Offline key generation (if needed)
