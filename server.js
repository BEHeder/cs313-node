const express = require('express')
const path = require('path')
const html = require('html')
const {Pool, Client} = require('pg')
var ratesEngine = require('./public/ratesEngine')
var gamesEngine = require('./public/gamesEngine')
var accountEngine2 = require('./public/accountEngine2')
var session = require("express-session")
require('dotenv').config()
const PORT = process.env.PORT || 5000
const connectionString = process.env.DATABASE_URL
const pool = new Pool({connectionString: connectionString})



express()
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
  }))

  // these help process post requests
  .use(express.json())
  .use(express.urlencoded({extended: true}))

  .get('/', (req, res) => res.render('pages/index'))
  .get('/week09', function (req, res) {
    res.sendFile('form09.html', { root: __dirname + "/public"})
  })
  .get('/getRate', ratesEngine.calculateRate)
  .get('/week10', function (req, res) {
    res.sendFile('form10.html', { root: __dirname + "/public"})
  })
  .get('/getGame', gamesEngine.getGame)
  .get('/week11', function(req,res) {
    res.sendFile('signIn11.html', {root: __dirname + "/public"})
  })
  .get('/gamesList11', function(req,res) {
    res.sendFile('gamesList11.html', {root: __dirname + "/public"})
  })
  .get('/gameSearch11', function(req,res) {
    res.sendFile('gameSearch11.html', {root: __dirname + "/public"})
  })
  .get('/getGames', gamesEngine.getGames)
  .get('/signIn', function(req,res,next){
    res.sendFile('signIn.html', {root: __dirname + "/public"})
    if (req.session.user) {
      res.redirect('/gamesList')
    }
  })
  .post('/signIn2', accountEngine2.handleSignIn)
  .get('/gamesList', function(req,res) {
    res.render('pages/gamesList')
  })


  .listen(PORT, () => console.log(`Listening on ${PORT}`))

