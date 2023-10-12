[![npm](https://img.shields.io/npm/v/detect-element-overflow.svg)](https://www.npmjs.com/package/detect-element-overflow) ![downloads](https://img.shields.io/npm/dt/detect-element-overflow.svg) [![CI](https://github.com/wojtekmaj/detect-element-overflow/workflows/CI/badge.svg)](https://github.com/wojtekmaj/detect-element-overflow/actions)

# Detect-Element-Overflow

A function that tells you whether a given element is overflowing its container or not. Useful for creating dropdowns and tooltips.

## tl;dr

- Install by executing `npm install detect-element-overflow` or `yarn add detect-element-overflow`.
- Import by adding `import detectElementOverflow from 'detect-element-overflow'`.
- Do stuff with it!
  ```ts
  const collisions = detectElementOverflow(child, parent);
  ```

## User guide

Detect-Element-Overflow returns an object with getter functions described below.

| Attribute name | Description                                                                                                                                                         | Example values |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| collidedTop    | Whether or not the child element collided with the top parent's border.                                                                                             | `true`         |
| collidedBottom | Whether or not the child element collided with the bottom parent's border.                                                                                          | `true`         |
| collidedLeft   | Whether or not the child element collided with the left parent's border.                                                                                            | `true`         |
| collidedRight  | Whether or not the child element collided with the right parent's border.                                                                                           | `true`         |
| overflowTop    | How many pixels of the child have crossed the top parent's border. Negative values specify how many pixels are between the child and the top parent's border.       | `20`, `-15`    |
| overflowBottom | How many pixels of the child have crossed the bottom parent's border. Negative values specify how many pixels are between the child and the bottom parent's border. | `20`, `-15`    |
| overflowLeft   | How many pixels of the child have crossed the left parent's border. Negative values specify how many pixels are between the child and the left parent's border.     | `20`, `-15`    |
| overflowRight  | How many pixels of the child have crossed the right parent's border. Negative values specify how many pixels are between the child and the right parent's border.   | `20`, `-15`    |

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
