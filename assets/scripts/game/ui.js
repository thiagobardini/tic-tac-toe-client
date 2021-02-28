const store = require("../store");

const createNewGame = function () {
    console.log("in create game")
  $(".box").trigger("reset");
  $("#frame").hide();
  $("#success-message").text("Let's Play!");
};

const createGameSuccess = function () {
  console.log("in create game")
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
  const gameList = Array.from(res.games)
  
  // store.gameOver = res.game.over
  $("#frame").hide();
  let storyHTML = ""
  for (const game of gameList) {
    storyHTML += `
      <div>
        <p>GAME_ID: ${game._id}</p>
      </div>
    `

    // $('.viewTitle').text('History Game
    // $(".viewID").html(`ID: ${game._id}`);
    // $(".viewCells").html(`: ${game.over}`);
    // $(".viewOver").html(`: ${game.createdAt}`);`
  }
  $('#viewGameBoard').html(storyHTML)

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
