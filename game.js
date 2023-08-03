'use strict'


const MINE = '💥'
const FLAGES = '🇮🇱'
const NUMBERS = ('12345678')

// THE MODEL (database) >>> into the cells
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

// function selectLevel(level) {
//     switch (level) {
//         case 'beginner':
//             numRow = 4;
//             numCol = 4;
//             MINES = 2;
//             break;
//         case 'medium':
//             numRow = 8;
//             numCol = 8;
//             MINES = 14,
//         break
//         case 'expert':
//             numRow = 12;
//             numCol = 12;
//             MINES = 32,
//         break
//         default:
//             numRow = 4;
//             numCol = 4;
//             MINES = 2;
//     }
// }

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
    // setMines(gBoard)

    // console.table(gBoard)
    // console.log(gBoard)
}

function renderBoard(board) {
    console.log(board)
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j].isMine) strHTML += '<td>' + MINE + '</td>'
            else strHTML += '<td>' + '</td>'
            // strHTML += `<td>${board[i][j]}</td>\n`
        }
        strHTML += `</tr>\n`
    }
    // console.log(strHTML)
    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
    // console.table(board)

}


// function buildBoard() {
//     const level = 4
//     const board = []

//     // replace(add) the size with the levels
//     for (var i = 0; i < level; i++) {
//         board.push([])

//         for (var j = 0; j < level; j++) {
//             board[i][j] = (Math.random() > 0.8) ? MINE : ''
//             // board[1][2] = 'MINE'
//             // console.log(board)
//         }
//     }
//     return board;
// }

function buildBoard() {
    // const level = 4
    const board = []

    for (var i = 0; i < 4; i++) {
        board.push([])

        for (var j = 0; j < 4; j++) {
            board[i][j] = {
                mineAroundCount: 4,
                isShown: false,
                isMine: (Math.random() > 0.8) ? MINE : '',
                isMarked: false,

                // board[1][2] = 'MINE'
                // console.log(board)
            }
        }
    }
    console.log(board)
    return board;
}

// function setMines(board) {
//     const MINE = {
//         location: {
//             i: 1,
//             j: 2
//         },
//         // currCellContent: '',
//     }
//     MINE.push(MINE)
//     board[MINE.location.i][MINE.location.j] = MINE
// }


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
    // elModalText.innerText = `You were blessed at current - time ${getTime()}`
    // onOpenModal()
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



var res = getRandomIntInclusive(0, gBoard.length)
console.log(res)

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//getEmptyCell --- pacman... cr...