import { AliasItems, decode } from '@alias/server';

import { getServerUrl } from './getServerUrl';

export const getAliases = async () => {
  const response = await fetch(`${getServerUrl()}/alias`);
  const data = await response.json();

  return decode(AliasItems, data);
};

export { AliasItems };
