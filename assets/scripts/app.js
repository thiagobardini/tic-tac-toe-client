'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#winner-img').hide()
  $('.winner-coins').hide()

  // Game Board
  $('#frame').hide()
  $('#game-controls').hide()
  $('#viewGameBoard').show()

  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // Game Config Section
  $('#new-game').on('click', gameEvents.onCreateGame)

  $('#game-status').on('click', gameEvents.onGameHistory)
})
