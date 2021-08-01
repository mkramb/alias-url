import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import mongoose from 'mongoose';
import logger from 'express-pino-logger';
import { createTerminus } from '@godaddy/terminus';
import { v4 as uuidv4 } from 'uuid';

import { jsonBody, notFound, errorHandler } from './middlewares';
import { createConnection, getConnection } from './database';
import { routes } from './routes';

const app = express();
const port = process.env.PORT ?? 8080;

const router = express.Router();
const server = http.createServer(
  app
    .use(jsonBody)
    .use(express.json())
    .use(helmet())
    .use(cors())
    .use(
      logger({
        genReqId: () => uuidv4(),
      })
    )
    .use(routes(router))
    .use(notFound)
    .use(errorHandler)
);

async function onHealthCheck() {
  if (getConnection().readyState !== mongoose.STATES.connected) {
    throw new Error();
  }
}

async function onShutdown() {
  await getConnection().close();
}

createTerminus(server, {
  healthChecks: {
    '/healthcheck': onHealthCheck,
  },
  onShutdown,
});

(async () => {
  server.listen(port, () => {
    console.log(`[server] listening at http://localhost:${port}`);
  });

  await createConnection();
})();
