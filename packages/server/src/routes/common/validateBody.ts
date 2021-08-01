import * as t from 'io-ts';
import express from 'express';
import { isLeft } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { StatusCodes } from 'http-status-codes';

export const validateBody: <Type = unknown, EncodeTo = unknown>(
  model: t.Type<Type, EncodeTo>
) => express.RequestHandler<unknown, unknown, EncodeTo> =
  (codec) => (req, res, next) => {
    const value = codec.decode(req.body);

    if (isLeft(value)) {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
        error_type: 'request_invalid',
        error_messages: PathReporter.report(value),
      });
    } else {
      next();
    }
  };
