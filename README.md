[![npm](https://img.shields.io/npm/v/country-code-to-flag-emoji.svg)](https://www.npmjs.com/package/country-code-to-flag-emoji) ![downloads](https://img.shields.io/npm/dt/country-code-to-flag-emoji.svg) [![CI](https://github.com/wojtekmaj/country-code-to-flag-emoji/workflows/CI/badge.svg)](https://github.com/wojtekmaj/country-code-to-flag-emoji/actions) ![dependencies](https://img.shields.io/david/wojtekmaj/country-code-to-flag-emoji.svg) ![dev dependencies](https://img.shields.io/david/dev/wojtekmaj/country-code-to-flag-emoji.svg) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Country-Code-to-Flag-Emoji
A function that returns a flag emoji given [IETF language tag].

## tl;dr
* Install by executing `npm install country-code-to-flag-emoji` or `yarn add country-code-to-flag-emoji`.
* Import by adding `import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'`.
* Do stuff with it!
    ```js
    countryCodeToFlagEmoji('pl'); // 🇵🇱
    ```

## Accepted formats
* [IETF language tag], e.g. `'en-US'` or `'US'`

## Examples

```js
> countryCodeToFlagEmoji('pl');
< '🇵🇱'

> countryCodeToFlagEmoji('hu-HU');
< '🇭🇺'
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>

[IETF language tag]: https://en.wikipedia.org/wiki/IETF_language_tag
