const store = require('../store')

const signUpSuccess = function (response) {
   $('#success-message').text('Thank you for signing up!').addClass('.success')
   // this resets (clears) every form on the page
   $('form').trigger('reset')
}

const signUpFailure = function (response) {
   $('#error-message').text('Sign up failed, try again!').addClass('.failure')
   $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
   $('#sign-up').hide()
   $('#sign-in').hide()
   $('#change-password').show()
   $('#sign-out').show()
   $('#game-controls').show()

   console.log('response from api is ', response)
   console.log('store object originally is ', JSON.stringify(store))

   store.user = response.user

   console.log('store object now is ', store)

   $('#success-message').text('Thank you for signing in').addClass('.success')
   $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
   $('#error-message').text('Sign in failed, try again').addClass('.failure')
   $('#sign-in').trigger('reset')
}


const changePasswordSuccess = function (response) {
   $('#success-message').text('PW successfully changed').addClass('.success')
   $('#change-password').trigger('reset')
}

const changePasswordFailure = function(response) {
   $('#error-message').text('Change password failed, try again!').addClass('.failure')
   $('#change-password').trigger('reset')
}

const signOutSuccess = function () {
   // hide events
   $('#sign-out').hide()
   $('#change-password').hide()

   $('#sign-in').show()
   $('#sign-up').show()

   $('#success-message').text('See you soon!').addClass('.success')
}


module.exports = {
   signUpSuccess,
   signUpFailure,    
   signInSuccess,
   signInFailure,
   changePasswordSuccess,
   changePasswordFailure,
   signOutSuccess   
}