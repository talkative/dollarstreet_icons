const fs = require('fs')
const path = require('path')
const stringifyObject = require('stringify-object')
const prettier = require('prettier')
const svg_to_png = require('svg-to-png')
const Jetty = require('jetty')

const jetty = new Jetty(process.stdout)

const icons = require('require-all')({
  dirname: `${__dirname}/src`,
  filter: /(ds.+)\.js$/,
  recursive: false,
})

const numIcons = Object.keys(icons).length

const indexJsHead = `(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : factory((global['dollar-street-icons'] = {}));
})(this, function(exports) {
  'use strict';
`

const indexJsFoot =
  "Object.defineProperty(exports, '__esModule', { value: true });});"

let indexJsExports = `exports.ds = _iconsCache;exports.prefix = prefix;`

let indexEsJsExports = `export {_iconsCache as ds, prefix,`

let variables = "var prefix = 'ds';"

let iconsCache = 'var _iconsCache = {'

let iconsMD = `# Icon List (${numIcons})

Icon | File Name | FA Icon Name
--- | --- | ---`

let iconsJSON = ''

Object.keys(icons).forEach(key => {
  const stringifiedVar = stringifyObject(icons[key].definition, {
    indent: '   ',
    singleQuotes: true,
  })

  const iconName = icons[key].definition.iconName

  const variable = `var ${key} = ${stringifiedVar};`

  variables = `${variables}
  ${variable}`

  iconsCache = `${iconsCache}
  ${key}: ${key},`

  indexJsExports = `${indexJsExports}
  exports.${key} = ${key};`

  indexEsJsExports = `${indexEsJsExports}
  ${key},`

  iconsMD = `${iconsMD}
![](../png/${iconName}.png) | ${key} | ${iconName}`

  iconsJSON = `${iconsJSON}
  "${iconName}": "${key}",`
})

iconsCache = `${iconsCache}};`

indexEsJsExports = `${indexEsJsExports}};`

const indexJs = prettier.format(
  `
  ${indexJsHead}
  ${variables}
  ${iconsCache}
  ${indexJsExports}
  ${indexJsFoot}`,
  {
    parser: 'babel',
  }
)

const indexEsJs = prettier.format(
  `
  ${variables}
  ${iconsCache}
  ${indexEsJsExports}
`,
  { parser: 'babel' }
)

iconsJSON = prettier.format(`{${iconsJSON}}`, { parser: 'json' })

const indexJsData = new Uint8Array(Buffer.from(indexJs))

const indexEsJsData = new Uint8Array(Buffer.from(indexEsJs))

const iconIndexMd = new Uint8Array(Buffer.from(iconsMD))

const iconIndex = new Uint8Array(Buffer.from(iconsJSON))

jetty.clear()

jetty.moveTo([0, 0]).text('☑️ Creating dist folder...')

fs.mkdir('dist', { recursive: true }, err => {
  if (err && err.code !== 'EEXIST') throw err

  jetty.moveTo([0, 0]).text('✅ Creating dist folder... Done')

  jetty.moveTo([1, 0]).text('☑️ Building index.js...')

  fs.writeFile('dist/index.js', indexJsData, 'utf8', err => {
    if (err) throw err
    jetty.moveTo([1, 0]).text('✅ Building index.js... Done')
  })

  jetty.moveTo([2, 0]).text('☑️ Building index.es.js...')

  fs.writeFile('dist/index.es.js', indexEsJsData, 'utf8', err => {
    if (err) throw err
    jetty.moveTo([2, 0]).text('✅ Building index.es.js... Done')
  })

  jetty.moveTo([3, 0]).text('☑️ Generating icon preview page...')

  fs.writeFile('docs/icons.md', iconIndexMd, 'utf8', err => {
    if (err) throw err
    jetty.moveTo([3, 0]).text('✅ Generating icon preview page... Done')
  })

  jetty.moveTo([4, 0]).text('☑️  Generating icon list...')

  fs.writeFile('icons.json', iconIndex, 'utf8', err => {
    if (err) throw err
    jetty.moveTo([4, 0]).text('✅ Generating icon list... Done')
  })
})

jetty.moveTo([5, 0]).text('☑️ Creating png folder...')

fs.mkdir('png', { recursive: true }, err => {
  if (err && err.code !== 'EEXIST') throw err

  jetty.moveTo([5, 0]).text('✅ Creating png folder... Done')

  jetty.moveTo([6, 0]).text('☑️  Generating PNGs...')

  svg_to_png
    .convert(path.join(__dirname, 'svg'), path.join(__dirname, 'png'), {
      defaultWidth: 64,
      defaultHeight: 64,
    })
    .then(function(hello, hey) {
      jetty.moveTo([6, 0]).text('✅ Generating PNGs... Done')
      jetty.moveTo([7, 0])
    })
})
