const fs = require('fs')
const path = require('path')
const stringifyObject = require('stringify-object')
const prettier = require('prettier')

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
![](../svg/${iconName}.svg) | ${key} | ${iconName}`

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

fs.mkdir('dist', { recursive: true }, err => {
  if (err) throw err

  fs.writeFile('dist/index.js', indexJsData, 'utf8', err => {
    if (err) throw err
    console.log('✅ Built index.js')
  })

  fs.writeFile('dist/index.es.js', indexEsJsData, 'utf8', err => {
    if (err) throw err
    console.log('✅ Built index.es.js')
  })

  fs.writeFile('docs/icons.md', iconIndexMd, 'utf8', err => {
    if (err) throw err
    console.log('✅ Generated icon preview page: icons.md')
  })

  fs.writeFile('icons.json', iconIndex, 'utf8', err => {
    if (err) throw err
    console.log('✅ Generated icon list: icons.json')
  })
})
