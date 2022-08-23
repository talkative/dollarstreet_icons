<div align="center">
<a href="https://www.gapminder.org/dollar-street"><img src="assets/dollarstreet_logo.png" alt="Dollar Street by GapMinder" /></a>
<h1>Dollar Street Icons</h1>
<p>Icon set to be used with the awesome icon framework <a href="https://fontawesome.com">Font Awesome</a></p>
</div>

<hr />

[![Font Awesome][fa-badge]][fa]

## 🖼 The icons

For a list of all icons with thumbnails, see [icons.md](icons.md). Included in the NPM package is `icons.json`, for your convenience.

## 🌩 Installation

```
npm i --save @gapminder/dollar-street-icons
```

---

## 📒 How to use

Import your icons like so:

```javascript
import { dsLogoCircle, dsTimes } from '@gapminder/dollar-street-icons'
```

Or as a deep import:

```javascript
import { dsLogoCircle } from '@gapminder/dollar-street-icons/dist/dsLogoCircle'
import { dsTimes } from '@gapminder/dollar-street-icons/dist/dsTimes'
```

Read about Font Awesome [here](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started).

Or go straight to the [Font Awesome API documentation](https://fontawesome.com/how-to-use/with-the-api).

---

## How to add icons

#### 1) Install development dependencies

```
npm install
```

#### 2) Add SVG files

Create your SVG file with dimensions 512x512 pixels. Make sure it's a "compound path" _(Illustrator: `Object > Compound Path > Make`)_. The file must have this structure, with `viewBox` and one `<path>` element:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 12.3.4, SVG Export Plug-In . SVG Version: 5.67 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
<path d="M304.3,353C210..."/>
</svg>
```

Add to the `svg` folder. Name the icon as you wish to call it in Font Awesome, lower-case hyphenated, for example: `logo-circle-svg`

#### 3) Run the build script:

```
npm run build
```

#### 4) Publish to NPM

> ⚠️ You must be a member of [the GapMinder NPM org](https://www.npmjs.com/org/gapminder) to continue!

```
npm publish --access public
```

---

## 🗓 Updated

2022-08-23

<br /><br /><br />

<hr />

<div align="center">
<a href="https://www.gapminder.org"><img src="assets/gapminder_logo.png" alt="Gap Minder" /></a>
</div>

[fa]: https://fontawesome.com
[fa-badge]: https://img.shields.io/badge/FontAwesome-5-528dd7.svg?style=for-the-badge&logo=fontawesome
