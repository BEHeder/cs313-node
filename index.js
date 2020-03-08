const express = require('express')
const path = require('path')
const html = require('html')
var ratesEngine = require('./public/ratesEngine');
const PORT = process.env.PORT || 5000
var value = 0

express()
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/week09', function (req, res) {
    res.sendFile('form09.html', { root: __dirname + "/public"})
  })
  .get('/getRate', ratesEngine.calculateRate)
//   .get('/math', (req, res) => {
//     var first = Number(req.query.num1)
//     var second = Number(req.query.num2)
//     if (req.query.operation == 'Add') {
//       value = first + second
//     }
//     if (req.query.operation == 'Subtract') {
//       value = first - second
//     }
//     if (req.query.operation == 'Multiply') {
//       value = first * second
//     }
//     if (req.query.operation == 'Divide') {
//       value = first / second
//     }
//     res.render('pages/result', {value: value})
//   })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))