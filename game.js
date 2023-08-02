'use strict'


const MINE = '💥'
const FLAGES = '🇮🇱'


// THE MODEL
var gBoard = {
    mineAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

var gLevel = {
    beginner: {
        SIZE: [4, 4],
        MINES: 2,
    },
    medium: {
        SIZE: [8, 8],
        MINES: 14,
    },
    expert: {
        SIZE: [12, 12],
        MINES: 32,
    }
}



var gGame = {
    isOne: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gMinesCount //  ?????????




function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)

    // console.table(gBoard)
    // console.log(gBoard)
}


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[i].length; j++) {
            strHTML += `<td>${board[i][j]}</td>\n`
        }
        strHTML += `</tr>\n`
    }
    // console.log(strHTML)
    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
}

function buildBoard() {
    var board = []

    for (var i = 0; i < 4; i++) {
        board.push([])

        for (var j = 0; j < 4; j++) {
            board[i][j] = ''
            // console.log()
        }
    }
    return board;
}


//////////////////////////////////////


var mines = gLevel['beginner'].MINES;
console.log(mines); // Output: 2

// while (placedMines = mines) {
//     var row = getRandomInt(0, rows - 1);
//     var col = getRandomInt(0, cols - 1);

//     if (board[rowIdx][colIdx] !== 'MINE') {
//         board[rowIdx][colIdx] = 'MINE'
//         placeMines++
//     }
// }