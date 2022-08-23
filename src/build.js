const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const Listr = require('listr')
const { Observable } = require('rxjs')
const makeJs = require('./make_js_from_svg')
const { makeDist, makePreviews, makeList } = require('./make_dist')

global.__basedir = path.join(__dirname, '../')

try {
  fs.mkdirSync(path.join(__basedir, 'dist'))
} catch (e) {
  if (e.code !== 'EEXIST') throw e
}

fsExtra.emptyDirSync(path.join(__basedir, 'dist'))

let result

const tasks = new Listr([
  {
    title: 'Make JS files from SVGs',
    task: () =>
      new Observable((observer) => {
        makeJs(
          (progress) => {
            observer.next(progress)
          },
          () => {
            observer.complete()
          }
        )
      }),
  },
  {
    title: 'Make FontAwesome distribution files',
    task: () =>
      new Observable((observer) => {
        makeDist(
          (progress) => {
            observer.next(progress)
          },
          () => {
            observer.complete()
          }
        )
      }),
  },
  {
    title: 'Generate PNG preview images',
    task: () =>
      new Observable((observer) => {
        makePreviews(
          (progress) => {
            observer.next(progress)
          },
          () => {
            observer.complete()
          }
        )
      }),
  },
  {
    title: 'Create preview page',
    task: () =>
      new Observable((observer) => {
        makeList(
          (progress) => {
            observer.next(progress)
          },
          () => {
            observer.complete()
          }
        )
      }),
  },
])

tasks.run().catch((err) => {
  console.error(err)
})
