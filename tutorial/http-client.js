const http = require('http')
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log(data)
    })
})

// Official Solution
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)