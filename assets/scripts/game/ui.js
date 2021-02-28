const store = require("../store");

const createNewGame = function () {
    console.log("in create game")
  $(".box").trigger("reset");
  $("#frame").hide();
  $("#success-message").text("Let's Play!");
};

const createGameSuccess = function () {
  $("#frame").show();
  $("#success-message").text("Let's Play!");
};

const showBoard = function () {
  $("#frame").show();
};

const createGameFailure = function () {
  $("#error-message").text("The board is not working. Try again later!");
};

// XXX REVER
const viewGameBoardSuccess = function (res) {
  store.game = res.game
  store.gameOver = res.game.over
  console.log(`${store.game} testando`)
  let game = store.user.token
  // store.gameOver = res.game.over
  $("#frame").hide();

  $('.viewTitle').text('History Game');
  $(".viewID").html(`ID: ${game._id}`);
  // $(".viewCells").html(`: ${store.gameOver}`);
  // $(".viewOver").html(`: ${games.createdAt}`);

};


const viewGameBoardFailure = function () {
  $("#frame").hide();
  $("#viewTitle").html(`<h2>viewGameBoardFailure</h2>`);
};

module.exports = {
  createNewGame,
  createGameSuccess,
  createGameFailure,
  showBoard,
  viewGameBoardSuccess,
  viewGameBoardFailure
};
