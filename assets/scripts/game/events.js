const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

// Used to storage the number of games.
let gamesPlayed = 0
let turn = false

let playerX = []
let playerO = []



const onTrack = function (event) {

    let cellSelected = $(event.target)

    let indexCell = cellSelected.index()

    step1(indexCell, cellSelected)

    //Checks if the button has already been clicked (=== 1) or return 
    function step1(index, value) {
        if (value.data("key") === "1") {
            /// DELETE
            alert(value.data("key") === "1")

            return
        }

        // Check the player's turn
        else if (turn) {

            // Show a player X turn
            $("#player-turn").text("Player 'X' turn!")
            $(value).html("O")

            // Checks if the button already clicked.
            $(value).data("key", "1")
            playerO.push(index)

            /// DELETE
            console.log(index + ' index print 1')
            console.log(playerO + ' array X')

            turn = !turn;
        } else {
            $("#player-turn").text("Player 'O' turn!")
            $(value).html("X")
            $(value).data("key", "1")
            playerX.push(index)
            /// DELETE
            console.log(index + ' index print 2')
            console.log(playerX + ' array X')

            turn = !turn
        }

        //DELETE
        console.log('Result: ' + playerX)
        console.log(`Result: ${playerO}`)

        // FIX IT
        // TODO
        // I don't know how to check if I have any of these combinations
        // if (playerX.includes(0, 1, 2) || playerX.includes(3, 4, 5) || playerX.includes(6, 7, 8) || playerX.includes(0, 3, 6) || playerX.includes(1, 4, 7) || playerX.includes(2, 5, 8) || playerX.includes(0, 4, 8) || playerX.includes(2, 4, 6)) {
        //     alert(true)
        // } else if (playerO.includes(0, 1, 2) || playerO.includes(3, 4, 5) || playerO.includes(6, 7, 8) || playerO.includes(0, 3, 6) || playerO.includes(1, 4, 7) || playerO.includes(2, 5, 8) || playerO.includes(0, 4, 8) || playerO.includes(2, 4, 6)) {
        //     `${"#winner-msg"}.html("Victory O")`
        // } else if (playerX && playerO.lenght === 5) {
        //     `${"#winner-msg"}.html("TIE")`
        // }


    }

    console.log("oi ", playerO)
    console.log("oi ", playerX)

    // FIX IT
// TODO -> API follow the instructions
    // api.ameRunner(indexCell, cellSelected)
    // //         .then(ui.updateGameSuccess)
    // //         .catch(ui.updateGameFailure)
}



const onCreateGame = function (event) {
    const token = store.user.token
    $('.box').html(' ').html(' ')

    ui.showBoard()
    api.CreateGame(token)
        .then(ui.createGameSuccess)
        .catch(ui.createGameError)
}

const onResetGame = function (event) {
    $('.box').html($('.box').html().replace('X', ''))

    $('.box').removeData("key", "")
    $('.box').removeData("key", "")

    // Set the numbers of victories to zero in case, the user decides to reset.
    // gamesVictories = 0
    $('#number-wins').html('<b> Number of wins: </b>')
    $('#winner-message').hide()
}


module.exports = {
    onCreateGame,
    onTrack,
    onResetGame
}