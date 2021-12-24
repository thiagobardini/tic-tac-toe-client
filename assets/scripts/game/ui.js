const store = require('../store')

const createNewGame = function () {
  console.log('in create game')
  $('.box').trigger('reset')
  $('#frame').hide()
  $('#success-message').text("Let's Play!")
  setTimeout(function () {
    $('#success-message').text('').removeClass('failure')
  }, 4000)
}

const createGameSuccess = function () {
  console.log('in create game')
  $('#frame').show()
  $('#game-status').show()
  $('#winner-img').hide()
  // $('#winner-coins').hide()
  $('#success-message').text("Let's Play!")
  setTimeout(function () {
    $('#success-message').text('').removeClass('failure')
  }, 4000)
}

const showBoard = function () {
  $('#frame').show()
  $('#game-status').show()
}

const createGameFailure = function () {
  $('#error-message').text('The board is not working. Try again later!')
  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

const winSuccess = function () {
  $('#success-message').text(`Victory! \n\n GAME_CELLS: ${game.cells} \n\n BOX: ${box}`)
  setTimeout(function () {
    $('#success-message').text('').removeClass('failure')
  }, 4000)
}

const viewGameBoardSuccess = function (res) {
  const gameList = Array.from(res.games)

  $('#frame').hide()
  $('#game-status').hide()
  $('#viewGameBoard').show()
  let storyHTML = ''
  for (const game of gameList) {
    storyHTML += `
      <div class="container alert alert-primary" role="alert" >
        <p>ID: ${game._id}</p>
        <p>Game ID: ${game.owner}</p>
        <p>Cells Used: ${game.cells}</p>
        <p>Game Over: ${game.over}</p>
        <p>Create Data: ${game.createdAt}</p>
      </div>
    `
  }
  $('#viewGameBoard').html(storyHTML)
}

const viewGameBoardFailure = function () {
  $('#frame').hide()
  $('#viewTitle').html('<h2>viewGameBoardFailure</h2>')
  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

module.exports = {
  createNewGame,
  createGameSuccess,
  createGameFailure,
  showBoard,
  viewGameBoardSuccess,
  viewGameBoardFailure,
  winSuccess
}
