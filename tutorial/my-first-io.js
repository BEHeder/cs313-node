const fs = require('fs');
buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
var num = 0;
var arr = str.split("\n");
console.log(arr.length - 1); //apparently to account for an extra \n

// The Official Solution
'use strict'
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1