const config = require('../config')
const store = require('../store')

const createGame = function (data) {
   console.log('data is ', data)
   console.log('store is ', store)

   return $.ajax({
      method: 'POST',
      url: `${config.apiUrl}/games`,
      headers: {
         Authorization: 'Bearer ' + store.user.token
      }
   })
}


const updateGame = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/games/${store.game._id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

// const gameRunner = function (index, value, over) {
//    return $.ajax({
//       headers: {
//          Authorization: `Bearer ${store.user.token}`
//       },
//       url: 'https://tic-tac-toe-api-production.herokuapp.com/games/' + store.ID,
//       method: 'PATCH',
//       data: {
//          game: {
//             cell: {
//                index: index, // current index   
//                value: value // current value
//             },
//             over: over // won true
//          }
//       }
//    })
// }

const viewGames = () => {
  console.log('got games') // XXX delete
  return $.ajax({
    url: `${config.apiUrl}/games/`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
   createGame,
   viewGames
   
}