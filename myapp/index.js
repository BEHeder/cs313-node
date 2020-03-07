const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World! How ya doin\'?')
})
// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })
// app.put('/user', (req, res) => res.send('Got a PUT request at /user'))
// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
// })

// example from Express FAQ of an error handler
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// this should be below all other functions for 404's
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))