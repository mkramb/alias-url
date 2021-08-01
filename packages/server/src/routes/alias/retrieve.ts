import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { AliasItems } from '../../models';
import { AliasTable } from '../../database';
import { decode } from '../../utils';

// only support max retrieval of
// 1000 items at one time
const MAX_LIMIT = 1000;

type RetrieveQueryParams = {
  limit: number;
  skip: number;
};

export async function retrieve(
  req: express.Request<unknown, unknown, unknown, RetrieveQueryParams>,
  res: express.Response<AliasItems>
) {
  const skip = +req.query.skip ?? 0;
  const limit = +req.query.limit ?? MAX_LIMIT;

  const aliases = await AliasTable.find()
    .limit(limit <= MAX_LIMIT ? limit : MAX_LIMIT)
    .skip(skip)
    .sort({
      created_on: 'desc',
    })
    .lean()
    .exec();

  const items = decode(AliasItems, aliases);

  req.log.info({
    message: 'Retrieved Aliases',
  });

  res.status(StatusCodes.OK);
  res.send(items);
}
