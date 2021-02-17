const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

// Used to storage the number of games.
let gamesPlayed = 0
var turn = false


const onTrack = function (event) {

    let cellSelected = $(event.target)
    
    let indexCell = cellSelected.index()
    
    //verifica se o botão já foi pressionado e aborta.
    if (cellSelected.data("key") == "1") {
        return;
    }
    //verifica de quem é a vez
    if (turn) {
        //indica a vez do jogador em questão
        $("#player-turn").text("Player turn X");
        $(cellSelected).html("O");
        //marca como botão já precionado.
        $(cellSelected).data("key", "1");
        turn = !turn;
    } else {
        $("#player-turn").text("Player turn O");
        $(cellSelected).html("X");
        $(cellSelected).data("key", "1");
        turn = !turn;
    }
    api.GameRunner(indexCell, cellSelected)
    //         .then(ui.updateGameSuccess)
    //         .catch(ui.updateGameFailure)
}

// const onTrack = $(document).ready(function () {

//     var player = 1;

//     $(".box").click(function () {
//         if (player === 1) {
//             $(this).text("X");
//             player = 2;
//         } else {
//             $(this).text("O");
//             player = 1;
//         }
//         $("#player-turn").text("Player turn: " + player)

//         // api.GameRunner(dataCellIndex, playerChoice)
//         //     .then(ui.updateGameSuccess)
//         //     .catch(ui.updateGameFailure)

//     });

// });

// const onTrack = function (event) {
//     // Select the exactly cell that it was clicked.
//     const selected = $(event.target)
//     // console.log(cellSelected) Displays div selected on the game.
//     console.log(selected)

//     let dataCellIndex = selected.index()
//     console.log(dataCellIndex)

//     let player = 1
//     const selected = $(event.target)

//     if (player == 1) {
//         $(this).text("X");
//         player = 2;
//     } else {
//         $(this).text("O");
//         player = 1;


//     api.GameRunner(dataCellIndex, playerChoice)
//         .then(ui.updateGameSuccess)
//         .catch(ui.updateGameFailure)

// }

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