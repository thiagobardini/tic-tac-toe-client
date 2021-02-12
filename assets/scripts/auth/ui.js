const store = require('../store')
const scss = require('../../styles/index.scss')

const signUpSuccess = function (response) {
   $('#error-message').text('Thank you for signing up!')
   // this resets (clears) every form on the page
   $('form').trigger('reset')
}

const signUpFailure = function (response) {
   $('#error-message').text('Sign up failed, try again!')
}

const signInSuccess = function (response) {
   console.log('response from api is ', response)
   console.log('store object originally is ', JSON.stringify(store))

   store.user = response.user

   console.log('store object now is ', store)

   $('#error-message').text('Thank you for signing in')
   $('#sign-in').trigger('reset')
   // $('#sign-up').hide()
   // $('#sign-in').hide()
}

const signInFailure = function (response) {
   $('#error-message').text('Sign in failed, try again')
}

module.exports = {
   signUpSuccess,
   signUpFailure,
   signInSuccess,
   signInFailure

}