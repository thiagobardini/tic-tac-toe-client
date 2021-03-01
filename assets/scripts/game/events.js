const api = require("./api");
const ui = require("./ui");
const getFormFields = require("../../../lib/get-form-fields");
const store = require("../store");

// Used to storage the number of games.
store.currentTurn = true;
store.currentTurnValue = "";
store.data = {
  game: {
    cell: {},
    over: false,
  },
};

let gameFinished = false;

const hasWinCase = (game) => {
  const combo = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const winnersArr = ["XXX", "OOO"];

  const mappedCombo = combo.map((arr) => {
    let result = "";
    arr.forEach((i) => {
      result += game.cells[i] === "X" ? "X" : "0";
    });
    return winnersArr.includes(result);
  });

  return mappedCombo.filter((e) => e)[0];
};

const checkEndGame = (game, box) => {
  const data = {
    game: {
      cell: {
        index: $(box).data("cell-index"),
        value: store.currentTurnValue,
      },
      over: true,
    },
  };

  if (hasWinCase(game)) {
    console.log(`Victory! \n\n GAME_CELLS: ${game.cells} \n\n BOX: ${box}`);
    $("#player-turn").html(`<h2 class="alert alert-primary"> Victory!</h2>`);
    $(".box").off("click", onTrack);
    
    gameFinished = true;
    
    api.updateGame(data).then((response) => console.log(response));
  } else if (!game.cells.includes("")) {
    console.log(`Tie: \n\n GAME_OBJECT: ${game}`);
    $("#player-turn").html(`<h2 class="alert alert-primary"> Tie Game! Play Again.</h2>`);
    
    $(".box").off("click", onTrack);

    gameFinished = true;

    api.updateGame(data).then((response) => console.log(response));
  }
   
  return game;
};

const setCurrentValues = (event) => {
  const value = $(event.target);
  const box = event.target;
  store.currentTurn = !store.currentTurn;
  store.data.game.cell.index = $(box).data("cell-index");

  if (store.currentTurn) {
    store.data.game.cell.value = "O";
    $("#player-turn").text("Player 'X' turn!");
    $(value).html("O");
    $(value).data("key", "1");
  } else {
    store.data.game.cell.value = "X";
    $("#player-turn").text("Player 'O' turn!");
    $(value).html("X");
    $(value).data("key", "1");
  }
};

const onTrack = async(event) => {
  setCurrentValues(event);

  if (gameFinished) {
    checkEndGame(store.data, event.target);
  } else {
    await api
      .updateGame(store.data)
      .then((response) => {
        checkEndGame(response.game, event.target);
      })
      .catch(ui.updateGameFailure);
  }

  console.log("finished the turn");
};

const onCreateGame = (event) => {
  const token = store.user.token;
  $(".box").html(" ").html(" ");
  $(".box").on("click", onTrack);
  ui.showBoard();
  $("#viewGameBoard").hide();
  api
    .createGame()

    .then((response) => {
      store.game = response.game;
      store.gameOver = false;
      ui.createGameSuccess();
    })
    .catch(ui.createGameFailure);
};

// Function to get status of the game
const onGameHistory = () => {
  $("#viewGameBoard").show();
  api.viewGames()
    .then((response) => {
      
      ui.viewGameBoardSuccess(response);
      console.log(`${res} onGameHistory res`);
    })
    .catch(ui.viewGameBoardFailure);
};

module.exports = {
  onCreateGame,
  onTrack,
  onGameHistory,
};
