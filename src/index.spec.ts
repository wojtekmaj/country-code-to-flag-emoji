import { describe, expect, it } from 'vitest';

import countryCodeToFlagEmoji from './index.js';

describe('countryCodeToFlagEmoji', () => {
  it('returns nothing given nothing', () => {
    // @ts-expect-error-next-line
    expect(() => countryCodeToFlagEmoji()).toThrow();
  });

  it('returns proper emoji from an ISO 3166-1 alpha-2 code', () => {
    const result = countryCodeToFlagEmoji('PL');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from a lowercased ISO 3166-1 alpha-2 code', () => {
    const result = countryCodeToFlagEmoji('pl');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from an IETF language tag', () => {
    const result = countryCodeToFlagEmoji('pl-PL');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from an IETF language tag where the region is different', () => {
    const result = countryCodeToFlagEmoji('ar-AE');

    expect(result).toBe('🇦🇪');
  });

  it('returns proper emoji from a lowercased IETF language tag', () => {
    const result = countryCodeToFlagEmoji('pl-pl');

    expect(result).toBe('🇵🇱');
  });

  it.each`
    countryCode                      | expected
    ${'en-US-u-ca-gregory'}          | ${'🇺🇸'}
    ${'zh-Hant-TW-u-nu-hanidec'}     | ${'🇹🇼'}
    ${'en-GB-oxendict'}              | ${'🇬🇧'}
    ${'de-CH-1996'}                  | ${'🇨🇭'}
    ${'en-US-x-twain'}               | ${'🇺🇸'}
    ${'en-us-u-ca-gregory'}          | ${'🇺🇸'}
    ${'zh-cmn-Hans-CN-u-nu-hanidec'} | ${'🇨🇳'}
    ${'kok-IN-u-nu-deva'}            | ${'🇮🇳'}
    ${'en-US-u-rg-gbzzzz-x-ca'}      | ${'🇺🇸'}
  `('returns proper emoji from $countryCode', ({ countryCode, expected }) => {
    const result = countryCodeToFlagEmoji(countryCode);

    expect(result).toBe(expected);
  });

  it('returns proper emoji from an UK extended code', () => {
    const result = countryCodeToFlagEmoji('GB-SCT');

    expect(result).toBe('🏴󠁧󠁢󠁳󠁣󠁴󠁿');
  });

  it('returns proper emoji from a lowercased UK extended code', () => {
    const result = countryCodeToFlagEmoji('gb-sct');

    expect(result).toBe('🏴󠁧󠁢󠁳󠁣󠁴󠁿');
  });

  it('returns proper emoji from an alternative UK extended code for Wales', () => {
    const result = countryCodeToFlagEmoji('GB-CYM');

    expect(result).toBe('🏴󠁧󠁢󠁷󠁬󠁳󠁿');
  });
});
