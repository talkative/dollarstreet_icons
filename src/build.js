const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const makeJs = require('./make_js_from_svg')
const makeDist = require('./make_dist')

global.__basedir = path.join(__dirname, '../')

try {
  fs.mkdirSync(path.join(__basedir, 'dist'))
} catch (e) {
  if (e.code !== 'EEXIST') throw e
}

fsExtra.emptyDirSync(path.join(__basedir, 'dist'))

makeJs(function() {
  makeDist()
})
