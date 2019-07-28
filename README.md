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
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>

[IETF language tag]: https://en.wikipedia.org/wiki/IETF_language_tag
