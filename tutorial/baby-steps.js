// console.log(process.argv);
var i = 2;
var sum = 0;

while (process.argv[i]) {
    sum += +process.argv[i];
    i++;
}

console.log(sum);

// The Official Solution
'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)