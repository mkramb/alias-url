import express from 'express';

import { AliasRequest } from '../models';
import { createAlias, retrieve, redirect } from './alias';
import { validateBody } from './common';

function routes(router: express.Router) {
  return router
    .post('/alias', validateBody(AliasRequest), createAlias)
    .get('/alias/:alias', redirect)
    .get('/alias', retrieve);
}

export { routes };
