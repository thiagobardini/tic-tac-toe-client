const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
   event.preventDefault()
   const form = event.target
   const data = getFormFields(form)

   api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
}


const onSignIn = function (event) {
   event.preventDefault()
   // get data from html form    
   const form = event.target
   const data = getFormFields(form)

   // send data to api for sign up
   api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
}


module.exports = {
   onSignUp,
   onSignIn
}
