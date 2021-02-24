const store = require('../store')

const signUpSuccess = function (response) {
  $('#success-message').text('Thank you for signing up!').addClass('.success')
  // this resets (clears) every form on the page
  $('form').trigger('reset')
  setTimeout(function () {
    $('#success-message').text('').removeClass('success')
  }, 4000)
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again!').addClass('.failure')
  $('#sign-up').trigger('reset')

  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

const signInSuccess = function (response) {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-controls').show()
  $('#frame').show()
  $('#signOutHide').show()

  console.log('response from api is ', response)
  console.log('store object originally is ', JSON.stringify(store))

  store.user = response.user

  $('#success-message').text('Thank you for signing in').addClass('.success')
  $('#sign-in').trigger('reset')
  setTimeout(function () {
    $('#success-message').text('').removeClass('success')
  }, 4000)
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again').addClass('.failure')
  $('#sign-in').trigger('reset')

  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

const changePasswordSuccess = function (response) {
  $('#success-message').text('PW successfully changed').addClass('.success')
  $('#change-password').trigger('reset')
  setTimeout(function () {
    $('#success-message').text('').removeClass('success')
  }, 4000)
}

const changePasswordFailure = function (response) {
  $('#error-message').text('Change password failed, try again!').addClass('.failure')
  $('#change-password').trigger('reset')

  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

const signOutSuccess = function () {
  // hide events
  $('#sign-out').hide()
  $('#signOutButton').hide()

  $('#change-password').hide()
  // show sign-in and sign-up
  $('#sign-in').show()
  $('#sign-up').show()
  // hide game
  $('#game-controls').hide()
  $('#frame').hide()
  $("#signOutHide").hide()

  $('#success-message').text('See you soon!').addClass('.success')

  setTimeout(function () {
    $('#success-message').text('').removeClass('success')
  }, 4000)
}

const signOutFailure = function (response) {
  $('#error-message').text('Sign out failed, try again').addClass('.failure')
  $('#sign-in').trigger('reset')

  setTimeout(function () {
    $('#error-message').text('').removeClass('failure')
  }, 4000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
