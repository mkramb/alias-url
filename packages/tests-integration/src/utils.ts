import fetch from 'node-fetch';

import { serverUrl } from './config';

export const createAlias = async (url: string) => {
  return await fetch(`${serverUrl}/alias`, {
    body: JSON.stringify({ url }),
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getAliases = async () => {
  return await fetch(`${serverUrl}/alias`, {
    method: 'get',
  });
};

export const redirectAlias = async (alias: string) => {
  return await fetch(`${serverUrl}/alias/${alias}`, {
    method: 'get',
    redirect: 'manual', // to not follow the returned redirect
  });
};
