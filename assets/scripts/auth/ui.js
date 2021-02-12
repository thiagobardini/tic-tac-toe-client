const store = require('../store')

const signUpSuccess = function(response) {
   $('#error-message').text('Thank you for signing up!')
  // this resets (clears) every form on the page
  $('form').trigger('reset')
}

const signUpFailure =  function(response) {
   $('#error-message').text('Sign up failed, try again!')
}

module.exports = {
   signUpSuccess,
   signUpFailure

}