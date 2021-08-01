import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';

import { createAlias } from '../utils';

describe('Create Alias', () => {
  it('should be able to create valid alias', async () => {
    const validUrl = 'https://google.com/?' + uuidv4();
    const response = await createAlias(validUrl);
    const data = await response.json();

    expect(response.status).toBe(StatusCodes.CREATED);
    expect(data.original_url).toBe(validUrl);
    expect(data.alias.length).toBe(8);
  });

  it('should be able detect invalid url', async () => {
    const invalidUrl = 'httpsgoogle.com';
    const response = await createAlias(invalidUrl);
    const data = await response.json();

    expect(response.status).toBe(StatusCodes.UNPROCESSABLE_ENTITY);
    expect(data.error_type).toBe('request_invalid');
    expect(data.error_messages.length).toBe(1);
  });

  it('should not recreate alias which was already created', async () => {
    const validUrl = 'https://google.com/?' + uuidv4();
    const responseA = await createAlias(validUrl);

    expect(responseA.status).toBe(StatusCodes.CREATED);

    const responseB = await createAlias(validUrl);

    expect(responseB.status).toBe(StatusCodes.OK);
  });
});
