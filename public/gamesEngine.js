const express = require('express')
require('dotenv').config()
const {Pool, Client} = require('pg')
const connectionString = process.env.DATABASE_URL
const pool = new Pool({connectionString: connectionString})

function getGame(req, res) {
    const id = req.query.gameId
    getGameFromDb(id, function(error, result) {
        if (error || result == null || result.length != 1) {
            res.status(500).json({success: false, data: error})
        } else {
            const game = result[0]
            res.status(200).json(game)
        }
    })
}

function getGameFromDb(id, callback) {
    console.log("Getting the games from the database...")
    const sql = "SELECT * FROM game WHERE id = $1::int"
    const params = [id]
    pool.query(sql, params, function(err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err)
            callback(err, null)
        }
        console.log("Found result: " + JSON.stringify(result.rows))
        callback(null, result.rows)
    })

}

module.exports = {getGame: getGame}