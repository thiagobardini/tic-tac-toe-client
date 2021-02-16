const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

let playerChoice = ' '
let gamesVictories = 0

const onTrack = function (event) {

    // Select the exactly cell that it was clicked.
    const selected = $(event.target)
    // console.log(cellSelected) Displays div selected on the game.
    console.log(selected)

    let dataCellIndex = selected.index()
    console.log(dataCellIndex)


    if (selected.html('X') || selected.html('O')) {
        return
    } else {
        if (playerChoice === 'X') {
            selected.html('X')
        }
    }

    api.GameRunner(dataCellIndex, playerChoice)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)

}

// const X_CLASS = "x";
// const O_CLASS = "o";
// const combinationWin = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
// ];


const onCreateGame = function (event) {
    const token = store.user.token
    $('.box').html(' ').html(' ')



    ui.showBoard()
    apiGame.CreateGame(token)
        .then(ui.createGameSuccess)
        .catch(ui.createGameError)
}


module.exports = {
    onCreateGame,
    onTrack
}