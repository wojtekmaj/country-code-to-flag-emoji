const BLACK_FLAG = '🏴';
const CANCEL_TAG = '󠁿';

function shiftCodePoint(letter: string, offset: number): string {
  return String.fromCodePoint(letter.toLowerCase().charCodeAt(0) + offset);
}

/**
 * Converts 'a' to '🇦', 'b' to '🇧' and so on.
 *
 * @param {string} letter A single letter, eg. 'a', 'b', 'c' or 'A', 'B', 'C'
 * @returns {string} A regional indicator symbol letter
 */
function letterToRegionalIndicator(letter: string): string {
  return shiftCodePoint(letter, 127365);
}

/**
 * Converts 'a' to tag latin small letter a, 'b' to tag latin small letter b and so on.
 *
 * @param {string} letter A single letter, eg. 'a', 'b', 'c' or 'A', 'B', 'C'
 * @returns {string} A tag latin small letter
 */
function letterToTagLatinSmallLetter(letter: string): string {
  return shiftCodePoint(letter, 917504);
}

/**
 * Converts 'pl' to 'PL', 'en-US' to 'US' and so on.
 *
 * @param {string} countryCode An ISO 3166-1 alpha-2 code or IETF language tag
 * @returns {string} An ISO 3166-1 alpha-2 code
 */
function getIsoAlphaCode(countryCode: string): string {
  if (!countryCode.includes('-')) {
    return countryCode.toUpperCase();
  }

  // The region follows the language, optional extended languages and optional script
  const region = countryCode.match(
    /^[a-z]{2,8}(?:-[a-z]{3}){0,3}(?:-[a-z]{4})?-([a-z]{2})(?:-|$)/i,
  )?.[1];

  const country = region ?? (countryCode.split('-').pop() as string);

  return country.toUpperCase();
}

/**
 * Converts 'pl-PL' to 🇵🇱 and so on.
 *
 * @param {string} countryCode An ISO 3166-1 alpha-2 code or IETF language tag
 * @returns {string} A flag emoji
 */
export default function countryCodeToFlagEmoji(countryCode: string): string {
  if (!countryCode) {
    throw new Error('countryCode is required');
  }

  // Special case for UK extended codes like 'GB-SCT', 'GB-WLS' and so on
  const uppercasedCountryCode = countryCode.toUpperCase();

  if (uppercasedCountryCode.startsWith('GB-')) {
    const extendedCountryCode = (
      uppercasedCountryCode === 'GB-CYM' ? 'GB-WLS' : uppercasedCountryCode
    ).replace('-', '');

    return (
      BLACK_FLAG +
      Array.from(extendedCountryCode).map(letterToTagLatinSmallLetter).join('') +
      CANCEL_TAG
    );
  }

  return Array.from(getIsoAlphaCode(countryCode)).map(letterToRegionalIndicator).join('');
}
