const http = require('http')
const url = require('url')
var server = http.createServer(function onRequest(req, res) {
    if (req.url == '/home') {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h1>Welcome to the Home Page</h1>")
        res.end()
    }

    else if (req.url == '/getData') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify({name: "Bryan Heder", class: "cs313"}))
        res.end()
    }

    else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.write("<h1>404: Page Not Found</h1>")
        res.end()
    }
})
server.listen(8888)
console.log('prove08BH.js web server at port 8888 is running...')