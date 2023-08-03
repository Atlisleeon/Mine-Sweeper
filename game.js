'use strict'


const MINE = '💥'
const FLAGES = '🇮🇱'
const NUMBERS = ('12345678')

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
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gMinesCount //  ?????????

function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    gGame.isOn = true

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
    // console.table(board)
}




function buildBoard() {
    var board = []
    // replace(add) the size with the levels
    for (var i = 0; i < 4; i++) {
        board.push([])

        for (var j = 0; j < 4; j++) {
            board[i][j] = (Math.random() > 0.8) ? MINE : ''
            // board[1][2] = 'MINE'
            // console.log(board)
        }
    }
    return board;
}

// function buildBoard() {

//     var setMines = MINE

//     var board = []
//     // replace(add) the size with the levels
//     for (var i = 0; i < 4; i++) {
//         board.push([])

//         for (var j = 0; j < 4; j++) {
//             board[i][j] = setMines
//             // console.log(board)
//         }
//     }
//     return board;
// }







//////////the ninjaaaa //////////////////////////

function onOpenModal() {
    // elModal.style.display = 'block'
    const elModal = document.querySelector('.modal')
    elModal.classList.remove('hide')
    onCloseModal()
}


function onGameOver() {
    const elModalText = document.querySelector('.modal h2')
    elModalText.innerText = `You were blessed at current - time ${getTime()}`
    onOpenModal()
}

function onCloseModal() {
    // Todo: hide the modal
    const elModal = document.querySelector('.modal')
    elModal.classList.add('hide')
}

function onHandleKey(ev) {

    // TODO: close the modal if escape is pressed
    if (ev.key === 'Escape') onCloseModal()
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


// if (gBoard[rowIdx][colIdx] === MINE) {
//     gBoard[rowIdx][colIdx] = gameOver
// }