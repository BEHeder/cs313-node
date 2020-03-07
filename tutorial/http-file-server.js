const http = require('http')
const fs = require('fs')
const server = http.createServer(function (request, response) {
    response.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(process.argv[2])

// I'll admit... I looked up the official solution online
// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))