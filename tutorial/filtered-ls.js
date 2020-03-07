const fs = require('fs')
const path = require('path')
const ext = "." + process.argv[3]
// console.log('Hello World')
// console.log(ext)
fs.readdir(process.argv[2], doneReading)

function doneReading (err, list) {
    if (err) return console.error(err)
    // console.log(list.length)
    // var fileExts = []
    for (i = 0; i < list.length; i++) {
        // console.log(i)
        // console.log(path.extname(list[i]))
        // fileExts[i] = list[i]
        if (ext == path.extname(list[i]))
            console.log(list[i])
    }
}

// Official Solution
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})