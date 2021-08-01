import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { AliasTable } from '../../database';
import { AliasItem, decode } from '../../models';

export async function redirect(req: express.Request, res: express.Response) {
  try {
    const alias = await AliasTable.findOne({
      alias: req.params.alias,
    })
      .lean()
      .exec();

    const item = decode(AliasItem, alias);

    res.status(StatusCodes.MOVED_TEMPORARILY);
    res.header('Location', item.original_url);
    res.end();
  } catch (error) {
    req.log.error({
      message: 'Not able to retrieve Alias',
      data: error,
    });

    res.status(StatusCodes.NOT_FOUND);
    res.send();
  }
}
