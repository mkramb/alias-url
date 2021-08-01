import * as t from 'io-ts';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { decode } from '../../models';

export const validateBody: <Type = unknown, EncodeTo = unknown>(
  model: t.Type<Type, EncodeTo>
) => express.RequestHandler<unknown, unknown, EncodeTo> =
  (codec) => (req, res, next) => {
    try {
      decode(codec, req.body);
      return next();
    } catch (error) {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
        error_type: 'request_invalid',
        error_messages: error,
      });
    }
  };
