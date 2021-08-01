import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { errorHandler } from './errorHandler';

describe('errorHandler', () => {
  const mockNext = jest.fn();

  const mockRes = {
    headersSent: false,
    status: jest.fn(),
    send: jest.fn(),
  } as unknown as express.Response;

  const mockReq = {
    log: {
      error: jest.fn(),
    },
  } as unknown as express.Request;

  it('should be able to handle error by returning INTERNAL_SERVER_ERROR', () => {
    errorHandler(new Error(), mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(mockRes.send).toBeCalled();
  });

  it('should be able to call next if headers were already sent', () => {
    errorHandler(
      new Error(),
      mockReq,
      { ...mockRes, headersSent: true } as unknown as express.Response,
      mockNext
    );

    expect(mockNext).toBeCalled();
    expect(mockRes.send).not.toBeCalled();
  });
});
