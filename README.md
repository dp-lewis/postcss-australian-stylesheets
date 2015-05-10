# PostCSS Australian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Australian Stylesheets.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dp-lewis/postcss-australian-stylesheets.svg
[ci]:      https://travis-ci.org/dp-lewis/postcss-australian-stylesheets

```css
.foo {
    colour: true-blue !bloody-oath;
    border: yeah-nah;
}
```

```css
.foo {
    color: blue !important;
    border: none;
}
```

## Usage

```js
postcss([ require('postcss-australian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.
