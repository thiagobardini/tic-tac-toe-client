const store = require('../store')

const createNewGame = function () {
  $('.box').trigger('reset')
  $('#frame').hide()
}

const showBoard = function () {
  $('#frame').show()
}

const updateGameSuccess = function() {
  store.over = true
  store.game.over = true
  store.game.cells = store.cells
 $("#winner-msg").text('Player Won 2') // FIXME add player winner

}

const updateGameFailure = function() {
  $("#winner-msg").text('Tie Game! Play Again!') // FIXME add player winner
}
module.exports = {
  createNewGame,
  showBoard,
  updateGameSuccess,
  updateGameFailure
}
