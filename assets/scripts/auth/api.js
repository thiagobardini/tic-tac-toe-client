const config = require('../config')
const store = require('../store')

const signUp = function(data){
   return $.ajax({
      method: 'POST',
      url: config.apiUrl + '/sign-up',
      data: data
   })
}

module.exports = {
   signUp
}