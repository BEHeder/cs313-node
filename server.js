const express = require('express')
const path = require('path')
const html = require('html')
const {Pool, Client} = require('pg')
var ratesEngine = require('./public/ratesEngine');
var gamesEngine = require('./public/gamesEngine')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectionString = process.env.DATABASE_URL
const pool = new Pool({connectionString: connectionString})

express()
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/week09', function (req, res) {
    res.sendFile('form09.html', { root: __dirname + "/public"})
  })
  .get('/getRate', ratesEngine.calculateRate)
  .get('/week10', function (req, res) {
    res.sendFile('form10.html', { root: __dirname + "/public"})
  })
  .get('/getGame', gamesEngine.getGame)
  .listen(PORT, () => console.log(`Listening on ${PORT}`))