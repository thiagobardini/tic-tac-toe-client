const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const dodge = '<img src="public/dodge.gif">'
const bitcoin = '<img src="public/bitcoin.gif">'
const coins = "public/coins.gif"

// Used to storage the number of games.
store.currentTurn = true
store.currentTurnValue = ''
store.data = {
  game: {
    cell: {},
    over: false
  }
}

let gameFinished = false

const hasWinCase = (game) => {
  const combo = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ]

  const winnersArr = ['XXX', 'OOO']

  // Step
  const mappedCombo = combo.map((arr) => {
    let result = ''
    arr.forEach((i) => {
      // result += game.cells[i] === 'X' ? 'X' : '0'
      result += game.cells[i] ? game.cells[i] : !game.cells[i]
    })
    return winnersArr.includes(result)
  })

  return mappedCombo.filter((e) => e)[0]
}

// Step 4
const checkEndGame = (game, box) => {
  const data = {
    game: {
      cell: {
        index: $(box).data('cell-index'),
        value: store.currentTurnValue
      },
      over: true
    }
  }

  if (hasWinCase(game)) {
    console.log(`Victory! \n\n GAME_CELLS: ${game.cells} \n\n BOX: ${box}`)
    $('#player-turn').html('<h2 class="alert alert-primary"> Victory!</h2>')
    $('#winner-img').show()
    $('.box').off('click', onTrack)

    $('#pagecontainer').css('background-image', 'url(' + coins + ')')

    gameFinished = true

    // api.updateGame(data).then((response) => console.log(response))
  } else if (!game.cells.includes('')) {
    console.log(`Tie: \n\n GAME_OBJECT: ${game}`)
    $('#player-turn').html('<h2 class="alert alert-primary"> Tie Game! Play Again.</h2>')

    $('.box').off('click', onTrack)

    gameFinished = true

    // api.updateGame(data).then((response) => console.log(response))
  }

  return game
}

// Step 3
const setCurrentValues = (event) => {
  const value = $(event.target)
  const box = event.target
  store.currentTurn = !store.currentTurn
  store.data.game.cell.index = $(box).data('cell-index')

  if (store.currentTurn) {
    store.data.game.cell.value = 'O'
    $('#player-turn').html(`Player ${dodge} turn!`)
    $(value).html('O')
    $(value).data('key', '1')
    $(event.target).html(bitcoin)
  } else {
    store.data.game.cell.value = 'X'
    $('#player-turn').html(`Player ${bitcoin} turn!`)
    $(value).html('X')
    $(value).data('key', '1')
    $(event.target).html(dodge)
  }
}

// Step 2
const onTrack = async (event) => {
  // Step 3
  setCurrentValues(event)

  if (gameFinished) {
    checkEndGame(store.data, event.target)
  } else {
    await api
      .updateGame(store.data)
      .then((response) => {
        checkEndGame(response.game, event.target)
      })
      .catch(ui.updateGameFailure)
  }

  console.log('store is 2', store.data.game.cell)
  console.log('finished the turn')
}

// Step 1
const onCreateGame = (event) => {
  // const token = store.user.token
  $('.box').html(' ').html(' ')
  $('.box').on('click', onTrack)
  $('#pagecontainer').css('background-image', 'none')


  // store.currentTurn = 'X'
  // $('#player-turn').html(`Player ${dodge} turn!`)

  // Step 1.2
  ui.showBoard()

  gameFinished = false
  $('#viewGameBoard').hide()
  // Step 1.3
  api
    .createGame()
    // Step 1.4
    .then((response) => {
      store.game = response.game
      store.gameOver = false
      // Step 1.5
      ui.createGameSuccess()
    })
    .catch(ui.createGameFailure)
}

// Function to get status of the game
const onGameHistory = () => {
  $('#viewGameBoard').show()
  api.viewGames()
    .then((response) => {
      ui.viewGameBoardSuccess(response)
      // console.log(`${res} onGameHistory res`)
    })
    .catch(ui.viewGameBoardFailure)
}

module.exports = {
  onCreateGame,
  onTrack,
  onGameHistory
}
