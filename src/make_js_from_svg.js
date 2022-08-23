const fs = require('fs')
const path = require('path')
const parser = require('xml2json')
const compile = require('string-template/compile')
const prettier = require('prettier')

const { sleep } = require('./utils')

const fileContents = compile(
  `
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var prefix = 'ds'
var iconName = '{name}'
var width = {width}
var height = {height}
var ligatures = []
var unicode = 'e001'
var svgPathData = '{path}'

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData],
}

exports.{filename} = exports.definition
exports.prefix = prefix
exports.iconName = iconName
exports.width = width
exports.height = height
exports.ligatures = ligatures
exports.unicode = unicode
exports.svgPathData = svgPathData
`
)

const getFilename = function (name) {
  const newName = name.replace(/-([a-z])/gi, function (all, letter) {
    return letter.toUpperCase()
  })
  return newName.charAt(0).toUpperCase() + newName.slice(1)
}

const make = async function (progressFn, cb) {
  progressFn('🔎 Finding SVG files...')

  fs.readdir(path.join(__basedir, 'svg'), async function (err, contents) {
    if (err) {
      console.error('Could not list the directory.', err)
      process.exit(1)
    }

    const filenameMatch = /.svg/
    const files = contents.filter((filename) => filename.match(filenameMatch))

    const total = files.length - 1

    progressFn(`0/${total} processing...`)

    for (let current = 0, ii = files.length; current < ii; current++) {
      const file = files[current]

      progressFn(`${current}/${total} ${file}`)

      const content = fs.readFileSync(path.join(__basedir, 'svg', file), {
        encoding: 'utf-8',
      })

      try {
        const json = parser.toJson(content),
          data = JSON.parse(json),
          [, , width, height] = data.svg.viewBox.split(' '),
          svgPath = data.svg.path.d,
          name = file.split('.').slice(0, -1).join(),
          filename = `ds${getFilename(name)}`

        const newFile = prettier.format(
          fileContents({
            name,
            width,
            height,
            path: svgPath,
            filename,
          }),
          { parser: 'babel' }
        )

        fs.writeFileSync(
          path.join(__basedir, 'dist', `${filename}.js`),
          newFile,
          (err) => {
            if (err) {
              throw err
            }
          }
        )

        await sleep(20)
      } catch (e) {
        console.error(e)

        throw `⚠️ Found issue with ${file}, please make sure the SVG is clean`
      }
    }

    cb()
  })
}

module.exports = make
