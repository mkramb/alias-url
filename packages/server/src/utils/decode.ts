import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/lib/PathReporter';

export const decode = <
  Type = unknown,
  EncodeTo = unknown,
  DecodeFrom = unknown
>(
  type: t.Type<Type, EncodeTo, DecodeFrom>,
  data: DecodeFrom
): Type => {
  const value = type.decode(data);

  if (isLeft(value)) {
    throw PathReporter.report(value);
  }

  return value.right;
};
