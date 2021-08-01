import express from 'express';
import { customAlphabet } from 'nanoid/async';
import { StatusCodes } from 'http-status-codes';

import { AliasRequest, AliasItem, decode } from '../../models';
import { AliasTable } from '../../database';

// TODO: when we know specific of how many links will be generated,
// we could look into generating them offline, using a key generation service
const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 8);

export async function createAlias(
  req: express.Request<unknown, unknown, AliasRequest>,
  res: express.Response<AliasItem>
) {
  const alias = await AliasTable.findOne({
    original_url: req.body.url,
  }).exec();

  if (alias) {
    res.status(StatusCodes.OK);
    res.send(decode(AliasItem, alias.toJSON()));
  }

  try {
    const item = await AliasTable.create({
      alias: await nanoid(),
      original_url: req.body.url,
    });

    req.log.info({
      message: 'Created new Alias',
    });

    res.status(StatusCodes.CREATED);
    res.send(decode(AliasItem, item.toJSON()));
  } catch (error) {
    req.log.error({
      message: 'Potential Alias conflict',
      data: error,
    });

    res.status(StatusCodes.CONFLICT);
    res.send();
  }
}
