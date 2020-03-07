const net = require('net')
function listener (socket) {
    var d = new Date()
    var dMonth = d.getMonth() + 1
    if (dMonth < 10) {dMonth = "0" + dMonth}
    var dDay = d.getDate()
    if (dDay < 10) {dDay = "0" + dDay}
    var dHour = d.getHours()
    if (dHour < 10) {dHour = "0" + dHour}
    var dMin = d.getMinutes()
    if (dMin < 10) {dMin = "0" + dMin}
    var dStr = d.getFullYear() + '-' + dMonth + '-' + dDay + 
    ' ' + dHour + ':' + dMin + "\n"
    socket.write(dStr)
    socket.end()
}
const server = net.createServer(listener)
server.listen(process.argv[2])

// Official Solution
// 'use strict'
// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))