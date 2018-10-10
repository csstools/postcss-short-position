# PostCSS Short Position [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Short Position] lets define sides within the `position` property in
CSS, following the [1-to-4 syntax] to target `top`, `right`, `bottom`, and
`left`.

```pcss
.header {
    position: fixed 0 1em;
}

/* becomes */

.header {
    top: 0;
    right: 1em;
    bottom: 0;
    left: 1em;
    position: fixed;
}
```

## Usage

Add [PostCSS Short Position] to your project:

```bash
npm install postcss-short-position --save-dev
```

Use [PostCSS Short Position] to process your CSS:

```js
const postcssShortPosition = require('postcss-short-position');

postcssShortPosition.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortPosition = require('postcss-short-position');

postcss([
  postcssShortPosition(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Short Position] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-position.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-position
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-position.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-position

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Short Position]: https://github.com/jonathantneal/postcss-short-position
