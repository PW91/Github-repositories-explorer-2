const webfontsGenerator = require('webfonts-generator')
const path = require('path')
const fs = require('fs')

const FONTS_PATH = path.resolve(__dirname, '../../icons/')

const classPrefix = 'i'
const fontName = 'icofont'
const files = fs.readdirSync(FONTS_PATH)

webfontsGenerator({
  files: files.reduce((filesArr, filename) => {
    if (filename.includes('.svg')) {
      filesArr.push(path.resolve(FONTS_PATH, filename))
    }
    return filesArr
  }, []),
  dest: 'src/static/fonts/',
  fontName,
  cssDest: 'src/styles/icofont.ts',
  cssTemplate: path.resolve(__dirname, 'template.hbs'),
  types: ['woff2', 'woff', 'eot', 'ttf'],
  templateOptions: {
    classPrefix
  },
  fontHeight: 1000,
  html: true
}, function (error) {
  if (error) {
    console.log('Problem with converting icons!', error)
  } else {
    console.log('Icons converted!')
  }
})
