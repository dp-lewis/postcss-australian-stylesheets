# PostCSS Australian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Australian Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dp-lewis/postcss-australian-stylesheets.svg
[ci]:      https://travis-ci.org/dp-lewis/postcss-australian-stylesheets

## Australian syntax
```css
.foo {
    border-colour: vb-green;
    background-colour: vegemite;
    box-sizing: fair-dinkum;
    colour: true-blue !bloody-oath;
    display: yeah-nah;
    text-align: centre;
    text-indent: woop-woop;
    visibility: rack-off;
}
```

## CSS output
```css
.foo {
    border-color: #2D8249;
    background-color: #461B00;
    box-sizing: border-box;
    color: #0581C1 !important;
    display: none;
    text-align: center;
    text-indent: -9999px;
    visibility: hidden;
}
```

## Usage

```js
postcss([ require('postcss-australian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## gulp

Use [gulp-australian-stylesheets](https://github.com/stevemao/gulp-australian-stylesheets)

## grunt

Use [grunt-australian-stylesheets](https://github.com/stevemao/grunt-australian-stylesheets)

## Thanks to

Inspiration from [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets) and chats with [@darylljann](https://twitter.com/darylljann)
