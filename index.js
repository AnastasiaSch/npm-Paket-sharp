'use strict'

const sharp = require('sharp')
sharp('bild.jpg')
  .resize({width: 100})
  .toFile('bild_sharp.jpg', (err, info) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(info)
  })


