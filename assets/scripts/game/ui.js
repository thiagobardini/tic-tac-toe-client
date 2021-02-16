const store = require('../store')

const createNewGame = function () {
   $('.gameBoard').trigger('reset')
   $('#frame').hide()
}

const showBoard = function () {
   $('#frame').show()
}

module.exports = {
   createNewGame,
   showBoard
}