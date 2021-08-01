import { AliasRequest, decode } from '@alias/server';

import { getServerUrl } from './getServerUrl';

export const createAlias = async (url: string) => {
  const value = decode(AliasRequest, { url });
  const response = await fetch(`${getServerUrl()}/alias`, {
    body: JSON.stringify(value),
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
