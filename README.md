# PostCSS Australian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Australian Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dp-lewis/postcss-australian-stylesheets.svg
[ci]:      https://travis-ci.org/dp-lewis/postcss-australian-stylesheets

## Australian syntax
```css
.foo {
    colour: true-blue !bloody-oath;
    border: yeah-nah;
    box-sizing: fair-dinkum;
    visibility: rack-off;
}
```

## CSS output
```css
.foo {
    color: #0581C1 !important;
    border: none;
    box-sizing: border-box;
    visibility: hidden;
}
```

## Usage

```js
postcss([ require('postcss-australian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

## Thanks to

Inspiration from [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets) and chats with [@darylljann](https://twitter.com/darylljann)
