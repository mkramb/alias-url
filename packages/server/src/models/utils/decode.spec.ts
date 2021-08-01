import { AliasItem } from '../alias';
import { decode } from './decode';

describe('decode', () => {
  const validItem = {
    alias: '6mdrq61r',
    original_url: 'https://google.com',
  };

  it('should be able to decode valid item', () => {
    expect(decode(AliasItem, validItem)).toBe(validItem);
  });

  it('should throw error when decoding invalid item', () => {
    expect(() =>
      decode(AliasItem, { ...validItem, original_url: 'invalid' })
    ).toThrow();
  });
});
