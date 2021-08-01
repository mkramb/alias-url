import express, { json } from 'express';
import { StatusCodes } from 'http-status-codes';

import { jsonBody } from './jsonBody';

jest.mock('express', () => {
  const actualImpl = jest.requireActual('express');
  return {
    ...actualImpl,
    json: jest.fn(),
  };
});

describe('jsonBody', () => {
  const mockNext = jest.fn();

  const mockRes = {
    status: jest.fn(),
    send: jest.fn(),
    end: jest.fn(),
  } as unknown as express.Response;

  const mockReq = {
    log: {
      error: jest.fn(),
    },
  } as unknown as express.Request;

  const jsonMocked = json as jest.Mock;

  it('should be able to pass to return UNPROCESSABLE_ENTITY', () => {
    jsonMocked.mockImplementation(() => {
      return (
        _req: express.Request,
        _res: express.Response,
        callback: (error: Error) => void
      ) => {
        callback(new Error());
      };
    });

    jsonBody(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(mockRes.send).toBeCalled();
    expect(mockNext).not.toBeCalled();
  });

  it('should be able to call next when there is no errors', () => {
    jsonMocked.mockImplementation(() => {
      return (
        _req: express.Request,
        _res: express.Response,
        callback: (error: Error | undefined) => void
      ) => {
        callback(undefined);
      };
    });

    jsonBody(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
    expect(mockRes.send).not.toBeCalled();
    expect(mockRes.end).not.toBeCalled();
  });
});
