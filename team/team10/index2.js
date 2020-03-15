const express = require('express')
const router = express.Router() // I should look into how this is different
const pg = require('pg')
require('dotenv').config()
const connectionString = process.env.DATABASE_URL

router.get('/person10', function(req, res, next) {
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        console.log("connected to database")
        client.query('SELECT * FROM person10', function(err, result) {
            done()
            if (err) {
                return console.error('error running query', err)
            }
            res.send(result)
        })
    })
})