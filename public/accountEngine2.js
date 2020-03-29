var express = require("express")
var session = require("express-session")

function handleSignIn(req, res) {
    var result = {success: false}
    if (req.body.username == "johndoe" && req.body.password == "12345") {
        req.session.user = req.body.username
        result.success = true
    }
    res.json(result)
}

module.exports = {handleSignIn: handleSignIn}