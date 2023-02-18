// Translates 'a' to '🇦', 'b' to '🇧' and so on.
const letterToLetterEmoji = (letter: string): string =>
  String.fromCodePoint(letter.toLowerCase().charCodeAt(0) + 127365);

// Translates 'pl' to 'PL', 'en-US' to 'US' and so on.
const countryCodeToCountry = (countryCode: string): string =>
  countryCode.split('-').pop()?.toUpperCase() as string;

// Translates 'pl-PL' to 🇵🇱 and so on.
export default (code: string): string => {
  if (!code) {
    throw new Error('code is required');
  }

  return Array.from(countryCodeToCountry(code)).map(letterToLetterEmoji).join('');
};
