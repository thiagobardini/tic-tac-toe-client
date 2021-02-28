const api = require("./api");
const ui = require("./ui");
const getFormFields = require("../../../lib/get-form-fields");
const store = require("../store");

// Used to storage the number of games.
store.currentTurn = true
store.currentTurnValue = ''
store.userData = {
  game: {
    cell: {},
    over: false
  }
}

let gameFinished = false



const setCurrentValues = (event) => {
  const value = $(event.target)
  const box = event.target
  store.currentTurn = !store.currentTurn
  store.userData.game.cell.index = $(box).data('cell-index')

  if(store.currentTurn) {
    store.userData.game.cell.value = 'O'
    $("#player-turn").text("Player 'X' turn!")
    $(value).html("O")
    $(value).data("key", "1")
  } else {
    store.userData.game.cell.value = 'X'
    $("#player-turn").text("Player 'O' turn!")
    $(value).html("X")
    $(value).data("key", "1")
  }

}


// const onTrack = function (event) {
  // let cellSelected = $(event.target);
  // let indexCell = cellSelected.index();
  // step1(indexCell, cellSelected);
  // //Checks if the button has already been clicked (=== 1) or return
  // function step1(index, value) {
  //   if (value.data("key") === "1") {
  //     return;
  //   }
  //   // Check the player's turn
  //   else if (turn) {
  //     // Show a player X turn
  //     $("#player-turn").text("Player 'X' turn!");
  //     $(value).html("O");
  //     // Checks if the button already clicked.
  //     $(value).data("key", "1");
  //     playerO.push(index);
  //     turn = !turn;
  //   } else {
  //     $("#player-turn").text("Player 'O' turn!");
  //     $(value).html("X");
  //     $(value).data("key", "1");
  //     playerX.push(index);
  //     turn = !turn;
  //   }
  // }
  // function checkCombinations(p1, p2) {
  //   const combo = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < 9; i++) {
  //     if (combo[i].every((val) => p1.includes(val)) === true) {
  //       console.log("Player X Won"); // XXX Delete
  //       $("#winner-msg").text("Player X Won");
  //       console.log("Score X: ", ++playerXScore); // BUG soma vitorias do player o tbm
  //     } else if (combo[i].every((val) => p2.includes(val)) === true) {
  //       console.log("player O Won"); // XXX Delete
  //       $("#winner-msg").text("Player O Won");
  //       console.log("Score O: ", ++playerOScore); // BUG soma vitorias do player o tbm
  //       return true;
  //     } else {
  //       false;
  //     }
  //   }
  // }
  // checkCombinations(playerX, playerO);

  // // FIXME -> API follow the instructions
  // api
  //   .GameRunner(indexCell, cellSelected, checkCombinations())
  //   .then(ui.updateGameSuccess)
  //   .catch(ui.updateGameFailure);
// };




const onCreateGame = (event) => {
   const token = store.user.token
  $(".box").html(" ").html(" ");
  $('.box').on('click', onTrack)
  ui.showBoard()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

// Function to get status of the game
const onGameHistory = () => {
  $('#viewGameBoard').show()
  api.viewGames()  
  .then((res) => {
      // BUG Waiting for update function
    ui.viewGameBoardSuccess()
    console.log(`${res} onGameHistory res`)
  })
  .catch(ui.viewGameBoardFailure)
}




module.exports = {
  onCreateGame,
  onGameHistory
};
