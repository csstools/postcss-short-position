# Position Shorthand [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[Position Shorthand] lets you define sides within the `position` property in CSS, following the [1-to-4 syntax] to target `top`, `right`, `bottom`, and `left`.

```css
/* before */

.example-1 {
    position: fixed 0 1em;
}

/* after */

.example-1 {
    top: 0;
    right: 1em;
    bottom: 0;
    left: 1em;
    position: fixed;
}
```

## Options

#### `prefix`

Type: `String`  
Default: `""`

Adds an optional prefix to the `position` property (e.g. `"x"` for `-x-position`). Wrapping dashes (`-`) are automatically applied.

#### `skip`

Type: `String`  
Default: `"*"`

Specifies the skip token used to ignore a length.

## Usage

Add [Position Shorthand] to your build tool:

```bash
npm install postcss-short-position --save-dev
```

#### Node

```js
require('postcss-short-position').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Position Shorthand] as a PostCSS plugin:

```js
postcss([
  require('postcss-short-position')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Position Shorthand] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-short-position')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Position Shorthand] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-short-position')({ /* options */ })
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-short-position
[npm-img]: https://img.shields.io/npm/v/postcss-short-position.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-position
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-position.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/postcss-short-position
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/postcss-short-position.svg
[git-url]: https://gitter.im/postcss/postcss
[  git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Position Shorthand]: https://github.com/jonathantneal/postcss-short-position
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[1-to-4 syntax]: https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases
