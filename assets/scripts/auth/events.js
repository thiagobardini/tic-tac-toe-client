const getFormFields = require('../../../lib/get-form-fields')
const getForFields = require('../../../lib/get-form-fields')
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

module.exports = {
   onSignUp
}