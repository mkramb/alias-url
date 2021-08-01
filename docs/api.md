# API

The server is implemented using `express`, `cors` is enabled and has basic security in place (using `helmet` middleware). API is completely **decoupled** from actual SPA, which are only static resources and can be served and deployed separately (e.g. using a CDN):

- `/api/*` - API functionality
- `/healthcheck` - performs a healthcheck, for example is database connection established?
