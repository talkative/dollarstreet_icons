const path = require('path')
const makeJs = require('./make_js_from_svg')
const makeDist = require('./make_dist')

global.__basedir = path.join(__dirname, '../')

makeJs(function() {
  makeDist()
})
