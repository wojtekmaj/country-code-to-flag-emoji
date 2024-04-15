[![npm](https://img.shields.io/npm/v/country-code-to-flag-emoji.svg)](https://www.npmjs.com/package/country-code-to-flag-emoji) ![downloads](https://img.shields.io/npm/dt/country-code-to-flag-emoji.svg) [![CI](https://github.com/wojtekmaj/country-code-to-flag-emoji/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/country-code-to-flag-emoji/actions)

# Country-Code-to-Flag-Emoji

A function that returns a flag emoji given [IETF language tag].

## tl;dr

- Install by executing `npm install country-code-to-flag-emoji` or `yarn add country-code-to-flag-emoji`.
- Import by adding `import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'`.
- Do stuff with it!
  ```ts
  countryCodeToFlagEmoji('pl'); // 🇵🇱
  ```

## Accepted formats

- [IETF language tag], e.g. `'en-US'` or `'US'`

## Examples

```ts
countryCodeToFlagEmoji('pl'); // '🇵🇱'

countryCodeToFlagEmoji('hu-HU'); // '🇭🇺'
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>

[ietf language tag]: https://en.wikipedia.org/wiki/IETF_language_tag
