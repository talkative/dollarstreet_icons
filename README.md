# @GapMinder/dollar-street-icons - for Font Awesome

> Icons used by Dollar Street by GapMinder

[![npm](https://img.shields.io/npm/v/@gapminder/dollar-street-icons.svg?style=flat-square)](https://www.npmjs.com/package/@gapminder/dollar-street-icons)

## [List of icons](icons.md)

## Installation

```
npm i --save @gapminder/dollar-street-icons
```

Or

```
yarn add @gapminder/dollar-street-icons
```

## How to use

Read about Font Awesome [here](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started).

Or go straight to the [API documentation](https://fontawesome.com/how-to-use/with-the-api).

## How to add icons

Install dev dependencies:

```
yarn install
```

Add a new icon with file name `dsIconName.js`, mimicing the format of previous icons. Note the arrows highlighting vital parts to change:

```javascript
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var prefix = 'ds'
var iconName = 'house' // <--
var width = 48 // <--
var height = 48 // <--
var ligatures = []
var unicode = 'e001'
var svgPathData = 'M48,23.15L23.99,0L0,23.15h6.22V48h35.54V23.15H48z' // <--

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData],
}

exports.dsHouse = exports.definition // <--
exports.prefix = prefix
exports.iconName = iconName
exports.width = width
exports.height = height
exports.ligatures = ligatures
exports.unicode = unicode
exports.svgPathData = svgPathData
```

To get the svgPathData, find the option to create a "compound path" in your vector editor. Illustrator: `Object > Compound Path > Make`. Then you can select the image, copy, then paste into a text editor. Make sure svgPathData is one line only. The width and height values can be found in the SVG text as well as `viewBox="0 0 W H"`;

Then run the build script:

```
yarn build
```

## Issues and support

[GitHub issues](https://github.com/GapMinder/dollar-street-icons/issues)
