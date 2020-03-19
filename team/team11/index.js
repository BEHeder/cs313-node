const express = require('express')
// const path = require('path')
// const html = require('html')
// const {Pool, Client} = require('pg')
// require('dotenv').config()
const PORT = process.env.PORT || 5000
// const connectionString = process.env.DATABASE_URL
// const pool = new Pool({connectionString: connectionString})

express()
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    res.sendFile('searchForm.html', { root: __dirname + "/public"})
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))