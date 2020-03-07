const myModule = require('./mymodule.js')
// somewhere: myModule(process.argv[2], process.argv[3], 
// callback function)
// print to the console from this file
function printFilenames (err, files) {
    if (err) return console.error(err)
    for (i = 0; i < files.length; i++) {
        console.log(files[i])
    }
}

myModule(process.argv[2], process.argv[3], printFilenames)

// Official Solution
// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })