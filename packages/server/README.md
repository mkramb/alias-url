# @alias/server

The server is implemented using `express`, `cors` is enabled and has basic security in place (using `helmet` middleware). API is completely **decoupled** from actual SPA, which are only static resources and can be served and deployed separately (e.g. using a CDN):

- `/api/*` - API functionality
- `/healthcheck` - performs a healthcheck, for example is database connection established?

Server exposes model definitions (runtime - types), which act as a single source of truth and are used on frontend (for validation).

## Local Development

To start locally:

```
yarn start
```

## Build & bundle

```
yarn build
```
