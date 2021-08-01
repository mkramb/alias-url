import * as t from 'io-ts';

export interface MaxLengthString<N> {
  readonly MaxLengthString: unique symbol;
  readonly length: N;
}

export const MaxLengthString = <N extends number>(len: N) =>
  t.brand(
    t.string,
    (s): s is t.Branded<string, MaxLengthString<N>> => s.length <= len,
    'MaxLengthString'
  );
