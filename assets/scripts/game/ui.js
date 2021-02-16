const store = require('../store')

const createNewGame = function () {
  $('.box').trigger('reset')
  $('#frame').hide()
}

const showBoard = function () {
  $('#frame').show()
}

module.exports = {
  createNewGame,
  showBoard
}
