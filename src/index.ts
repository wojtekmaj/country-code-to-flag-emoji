/**
 * Translates 'a' to '🇦', 'b' to '🇧' and so on.
 *
 * @param {string} letter A single letter, eg. 'a', 'b', 'c' or 'A', 'B', 'C'
 * @returns {string} A letter emoji
 */
function letterToLetterEmoji(letter: string): string {
  return String.fromCodePoint(letter.toLowerCase().charCodeAt(0) + 127365);
}

/**
 * Translates 'pl' to 'PL', 'en-US' to 'US' and so on.
 *
 * @param {string} countryCode A full IETF language tag or a region name
 * @returns {string} A region name
 */
function countryCodeToCountry(countryCode: string): string {
  const country = countryCode.split('-').pop() as string;

  return country.toUpperCase();
}

/**
 * Translates 'pl-PL' to 🇵🇱 and so on.
 *
 * @param {string} countryCode A full IETF language tag or a region name
 * @returns {string} A flag emoji
 */
export default function countryCodeToFlagEmoji(countryCode: string): string {
  if (!countryCode) {
    throw new Error('countryCode is required');
  }

  return Array.from(countryCodeToCountry(countryCode)).map(letterToLetterEmoji).join('');
}
