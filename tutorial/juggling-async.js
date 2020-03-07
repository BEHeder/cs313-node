// Note: The exercise states that it may be more convenient to
// rely on async or run-parallel (www.npmjs.com/package/async 
// or run-parallel)
const http = require('http')
var contents = ["", "", ""]
var count = 0

function readUrl (index) {
    http.get(process.argv[2 + index], function (response) {
        response.setEncoding('utf8')
        response.on('data', function (data) {
            contents[index] += data
        })
        response.on('end', function () {
            count++
            if (count == 3)
                logContents()
        })
    })
}

function logContents() {
    console.log(contents[0])
    console.log(contents[1])
    console.log(contents[2])
}

for (i = 0; i < 3; i++)
    readUrl(i)

// Official Solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }