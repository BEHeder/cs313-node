module.exports = function (directory, fileExt, callback) {
    const fs = require('fs')
    const path = require('path')
    const ext = '.' + fileExt
    var files = [];
    fs.readdir(directory, function (err, list) {
        if (err) { return callback(err) }
        for (i = 0, j = 0; i < list.length; i++) {
            if (ext == path.extname(list[i])) {
                files[j] = list[i]
                j++
            }
        }
        callback(null, files)
    })
}

// Official Solution
// 'use strict'
// const fs = require('fs')
// const path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }