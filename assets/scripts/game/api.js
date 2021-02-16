const config = require('../config')
const store = require('../store')

const CreateGame = function (data) {
   console.log('data is ', data)
   console.log('store is ', store)

   return $.ajax({
      method: 'POST',
      url: config.apiUrl + '/games',
      headers: {
         Authorization: 'Bearer ' + store.user.token
      }
   })
}

const GameRunner = function (indexCell, value) {
   return $.ajax({
      method: 'PATCH',
      url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.ID, 
      headers: {
         // Access the token on the `store.user` object. This only works if we sign in first.
         Authorization: 'Bearer ' + store.user.token
      },
      data: {
         "game": {
            "cell": {
               "index": indexCell, //curent index
               "value": value // cunrent value
            },
            "over": false // won true
         }
      }
   })
}

module.exports = {
   CreateGame,
}