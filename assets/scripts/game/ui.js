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

const viewGameBoardSuccess = function () {
  $("#frame").hide();
  $("#viewTable").html(`<h2>History Game</h2>`);
};

const viewGameBoardFailure = function () {
  $("#frame").hide();
  $("#viewTable").html(`<h2>viewGameBoardFailure</h2>`);
};

module.exports = {
  createNewGame,
  createGameSuccess,
  createGameFailure,
  showBoard,
  viewGameBoardSuccess,
  viewGameBoardFailure
};
