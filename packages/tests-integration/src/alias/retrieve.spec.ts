import { v4 as uuidv4 } from 'uuid';
import { StatusCodes } from 'http-status-codes';
import { AliasItems } from '@alias/server';

import { createAlias, getAliases } from '../utils';

describe('Retrieves Aliases', () => {
  it('should be able to find created alias', async () => {
    const validUrl = 'https://google.com/?' + uuidv4();
    const responseCreated = await createAlias(validUrl);
    const dataCreated = await responseCreated.json();

    expect(dataCreated.alias.length).toBe(8);

    const response = await getAliases();
    const data = (await response.json()) as AliasItems;

    const returnedItem = data.find((item) => item.alias === dataCreated.alias);

    expect(returnedItem?.original_url).toBe(validUrl);
    expect(response.status).toBe(StatusCodes.OK);
  });
});
