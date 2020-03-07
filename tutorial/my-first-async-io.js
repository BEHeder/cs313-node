const fs = require('fs')
var myStr = undefined;
fs.readFile(process.argv[2], 'utf8', doneReading)

function doneReading(error, fileContents) {
    if (error) return console.error(error)
    myStr = fileContents
    const lines = myStr.split('\n').length - 1
    console.log(lines)
}

// Official Solution
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
    return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
})