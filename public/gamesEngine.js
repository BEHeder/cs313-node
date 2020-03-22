const express = require('express')
require('dotenv').config()
const {Pool, Client} = require('pg')
const connectionString = process.env.DATABASE_URL
const pool = new Pool({connectionString: connectionString})

function getGames(req, res) {
    getGamesFromDb(function(error, result) {
        if (error || result == null || result.length == 0) {
            res.status(500).json({success: false, data: error})
        } else {
            const games = result
            res.status(200).json(games)
        }
    })
}

function getGamesFromDb(callback) {
    console.log("Getting the games from the database...")
    const sql = "SELECT name FROM game"
    pool.query(sql, function(err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err)
            callback(err, null)
        }
        console.log("Found results: " + JSON.stringify(result.rows))
        callback(null, result.rows)
    })
}

function getGame(req, res) {
    const id = req.query.gameId
    getGameFromDb(id, function(error, result) {
        if (error || result == null) {
            res.status(500).json({success: false, data: error})
        } else {
            const game = result
            res.status(200).json(game)
        }
    })
}

function getGameFromDb(id, callback) {
    console.log("Getting the games from the database...")
    const sql = "SELECT name FROM game WHERE id = $1::int"
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

module.exports = {getGame: getGame, getGames: getGames}