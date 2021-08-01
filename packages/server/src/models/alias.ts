import * as t from 'io-ts';

import { UrlAsString } from './brands';
import { String14Max } from './common';

export const AliasRequest = t.exact(
  t.type({
    url: UrlAsString,
  })
);

export type AliasRequest = Readonly<t.TypeOf<typeof AliasRequest>>;

export const AliasItem = t.exact(
  t.type({
    alias: String14Max,
    original_url: UrlAsString,
  })
);

export const AliasItems = t.array(AliasItem);

export type AliasItem = Readonly<t.TypeOf<typeof AliasItem>>;
export type AliasItems = Readonly<t.TypeOf<typeof AliasItems>>;
