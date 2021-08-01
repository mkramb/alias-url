import express from 'express';
import { StatusCodes } from 'http-status-codes';

export function errorHandler(
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (res.headersSent) {
    return next(error);
  }

  req.log.error({
    message: error.message,
    data: error.stack,
  });

  res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  res.send();
}
