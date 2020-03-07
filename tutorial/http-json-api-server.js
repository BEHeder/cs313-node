// AGGHHHHAHADFAD, I looked up the official solution
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
// const http = require('http')
// const url = require('url')
// const server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     var parsing = new URL(req.url)
//     var d = new Date().toISOString()
//     var myJSON = JSON.stringify(parsing)
// })
// server.listen(process.argv[2])
