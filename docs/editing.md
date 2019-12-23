## How to add icons (6 steps)

#### 1) Install development dependencies

```
yarn install
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
yarn build
```

#### 4) Publish to NPM

> ⚠️ You must be a member of [the GapMinder NPM org](https://www.npmjs.com/org/gapminder) to continue!

```
npm publish --access public
```
