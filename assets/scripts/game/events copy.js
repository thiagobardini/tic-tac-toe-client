let playerO = [0, 1, 2]
let playerX = [0, 1, 4]

function check(x, o) {
    if (playerX.includes(0, 1, 2) || playerX.includes(3, 4, 5) || playerX.includes(6, 7, 8) || playerX.includes(0, 3, 6) || playerX.includes(1, 4, 7) || playerX.includes(2, 5, 8) || playerX.includes(0, 4, 8) || playerX.includes(2, 4, 6)) {
        console.log('x ganhou')
    } else if (playerO.includes(0, 1, 2) || playerO.includes(3, 4, 5) || playerO.includes(6, 7, 8) || playerO.includes(0, 3, 6) || playerO.includes(1, 4, 7) || playerO.includes(2, 5, 8) || playerO.includes(0, 4, 8) || playerO.includes(2, 4, 6)) {
        console.log('o ganhou')
    } else {
        console.log('xzz ganhou')
    }
}

check(playerX, playerO)