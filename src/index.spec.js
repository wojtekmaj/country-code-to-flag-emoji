import countryCodeToFlagEmoji from './index';

describe('countryCodeToFlagEmoji', () => {
  it('returns nothing given nothing', () => {
    const result = countryCodeToFlagEmoji();

    expect(result).toBe();
  });

  it('returns proper emoji from a full IETF language tag', () => {
    const result = countryCodeToFlagEmoji('pl-PL');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from a lowercase full IETF language tag', () => {
    const result = countryCodeToFlagEmoji('pl-pl');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from a region name', () => {
    const result = countryCodeToFlagEmoji('PL');

    expect(result).toBe('🇵🇱');
  });

  it('returns proper emoji from a lowercased region name', () => {
    const result = countryCodeToFlagEmoji('pl');

    expect(result).toBe('🇵🇱');
  });
});
