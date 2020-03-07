function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getCPUChoice() {
    var num = getRandomInt(0, 2)
    switch(num) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        default:
            return "scissors"
    }
}

function getWinner(player, cpu, username) {
    var winner = 'cpu' // Bro. Barney suggested this to cut the last else out

    if (player == cpu) {
        winner = "draw"
    } else if ((player == "rock" && cpu == "scissors")
            || (player == "scissors" && cpu == "paper") 
            || (player == "paper" && cpu == "rock")) {
        winner = username
    }
    // else {
    //     winner = "cpu"
    // }

    return winner
}

function playGame(req, res) {
    console.log("Playing the game from a different file")

    var player = req.query.player_choice
    var username = req.query.username

    var cpu = getCPUChoice()

    var winner = getWinner(player, cpu, username)

    var stuff = {player: player, cpu: cpu, winner: winner}

    res.render('results', stuff)
}

module.exports = {playGame: playGame}