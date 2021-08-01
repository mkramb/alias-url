import { v4 as uuidv4 } from 'uuid';
import { StatusCodes } from 'http-status-codes';

import { createAlias, redirectAlias } from '../utils';

describe('Redirect Alias', () => {
  it('should be able to redirect to the original url', async () => {
    const validUrl = 'https://google.com/?' + uuidv4();
    const responseCreated = await createAlias(validUrl);
    const dataCreated = await responseCreated.json();

    expect(dataCreated.alias.length).toBe(8);

    const response = await redirectAlias(dataCreated.alias);

    expect(response.status).toBe(StatusCodes.MOVED_TEMPORARILY);
    expect(response.headers.get('Location')).toBe(validUrl);
  });

  it('should be able to return NOT_FOUND for unknown alias', async () => {
    const response = await redirectAlias('11111111');

    expect(response.status).toBe(StatusCodes.NOT_FOUND);
  });
});
