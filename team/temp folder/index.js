const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var value = 0

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) => {
    var first = Number(req.query.num1)
    var second = Number(req.query.num2)
    if (req.query.operation == 'Add') {
      value = first + second
    }
    if (req.query.operation == 'Subtract') {
      value = first - second
    }
    if (req.query.operation == 'Multiply') {
      value = first * second
    }
    if (req.query.operation == 'Divide') {
      value = first / second
    }
    res.render('pages/result', {value: value})
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))