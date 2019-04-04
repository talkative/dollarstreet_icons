## How to add icons (6 steps)

#### 1) Install development dependencies

```
yarn install
```

#### 2) Add SVG files

Create your SVG file, and make sure it's a "compound path". _(Illustrator: `Object > Compound Path > Make`)_. Add to the `src` folder. Name the icon as you wish to call it in Font Awesome, lower-case hyphenated.

#### 3) Create icon JS file

Create a file with name `dsIconName.js`, mimicking the format of previous icons. Note the comments in the example code below:

```javascript
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var prefix = 'ds'
var iconName = 'house' // SVG file name
var width = 48 // width of viewBox
var height = 48 // height of viewBox
var ligatures = []
var unicode = 'e001'
var svgPathData = 'M48,23.15L23.99,0L0,23.15h6.22V48h35.54V23.15H48z' // SVG path

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData],
}

exports.dsHouse = exports.definition // this file name
exports.prefix = prefix
exports.iconName = iconName
exports.width = width
exports.height = height
exports.ligatures = ligatures
exports.unicode = unicode
exports.svgPathData = svgPathData
```

#### 4) insert SVG path data

If your SVG is a compound path, open the file in your image editor, copy to clipboard, then paste into a text editor. Find the SVG path similar to the example above and make sure it's one line only. That's the `svgPathData`. The width and height values can be found in the SVG attribute as `viewBox="0 0 W H"`;

#### 5) Run the build script:

```
yarn build
```

#### 6) Publish to NPM

> ⚠️ You must be a member of [the GapMinder NPM org](https://www.npmjs.com/org/gapminder) to continue!

```
npm publish --access public
```