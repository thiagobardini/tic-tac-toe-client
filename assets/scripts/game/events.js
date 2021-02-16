const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

let playerChoice = ' '
let gamesVictories = 0

const onTrack = function (event) {
    // Select the exactly cell that it was clicked.
    const cellSelected = $(event.target)
    console.log(cellSelected)

    let indexCell = cellSelected.index()
    console.log(indexCell)



    api.GameRunner(indexCell, playerChoice)
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
    $('.gameBoard').removeClass('X').removeClass('O')
    $('#frame').show()


    ui.showBoard()
}


module.exports = {
    onCreateGame,
    onTrack
}