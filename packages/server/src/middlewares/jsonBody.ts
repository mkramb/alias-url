import express from 'express';
import { StatusCodes } from 'http-status-codes';

export const jsonBody = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  express.json()(req, res, (error) => {
    if (error) {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY);
      res.send();
      res.end();
    } else {
      next();
    }
  });
};
