const http = require('http')
http.get(process.argv[2], function (response) {
    var content = "";
    response.setEncoding('utf8')
    response.on('data', function (data) {
        content += data
    })
    response.on('end', function () {
        console.log(content.length)
        console.log(content)
    })
})

// Official Solution - it seems they installed the bl package
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })