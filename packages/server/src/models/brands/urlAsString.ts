import * as t from 'io-ts';
import isURL from 'validator/lib/isURL';

export interface UrlAsString {
  readonly UrlAsString: unique symbol;
}

export const UrlAsString = t.brand(
  t.string,
  (url): url is t.Branded<string, UrlAsString> =>
    isURL(url, {
      require_protocol: true,
      require_valid_protocol: true,
    }),
  'UrlAsString'
);
