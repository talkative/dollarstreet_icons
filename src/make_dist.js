const fs = require('fs')
const path = require('path')
const stringifyObject = require('stringify-object')
const prettier = require('prettier')
const svg_to_png = require('svg-to-png')

let indexJsExports, indexEsJsExports, variables, iconsCache, iconsMD, iconsJSON

function makeDist(progressFn, cb) {
  const icons = require('require-all')({
    dirname: path.join(__basedir, 'dist'),
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

  indexJsExports = `exports.ds = _iconsCache;exports.prefix = prefix;`

  indexEsJsExports = `export {_iconsCache as ds, prefix,`

  variables = "var prefix = 'ds';"

  iconsCache = 'var _iconsCache = {'

  iconsMD = `# Icon List (${numIcons})

Icon | File Name | FA Icon Name
--- | --- | ---`

  iconsJSON = ''

  Object.keys(icons).forEach((key) => {
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

  progressFn('Creating dist folder...')

  fs.mkdir(path.join(__basedir, 'dist'), { recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') throw err

    progressFn('Building index.js...')

    fs.writeFile(
      path.join(__basedir, 'dist', 'index.js'),
      indexJsData,
      'utf8',
      (err) => {
        if (err) throw err
      }
    )

    progressFn('Building index.es.js...')

    fs.writeFile(
      path.join(__basedir, 'dist', 'index.es.js'),
      indexEsJsData,
      'utf8',
      (err) => {
        if (err) throw err

        cb()
      }
    )
  })
}

function makePreviews(progressFn, cb) {
  progressFn('Creating png folder...')

  fs.mkdir(path.join(__basedir, 'png'), { recursive: true }, (err) => {
    if (err && err.code !== 'EEXIST') throw err

    progressFn('Generating PNGs...')

    const svgFolderContents = fs.readdirSync(path.join(__basedir, 'svg'))
    const filenameMatch = /.svg/
    const files = svgFolderContents
      .filter((filename) => filename.match(filenameMatch))
      .map((filename) => path.join(__basedir, 'svg', filename))

    svg_to_png
      .convert(files, path.join(__basedir, 'png'), {
        defaultWidth: 64,
        defaultHeight: 64,
      })
      .then(function (hello, hey) {
        cb()
      })
  })
}
function makeList(progressFn, cb) {
  progressFn('Generating icon preview page...')

  const iconIndexMd = new Uint8Array(Buffer.from(iconsMD))

  const iconIndex = new Uint8Array(Buffer.from(iconsJSON))

  fs.writeFile(path.join(__basedir, 'icons.md'), iconIndexMd, 'utf8', (err) => {
    if (err) throw err
  })

  progressFn('Generating icon list...')

  fs.writeFile(path.join(__basedir, 'icons.json'), iconIndex, 'utf8', (err) => {
    if (err) throw err

    cb()
  })
}

module.exports = { makeDist, makePreviews, makeList }
