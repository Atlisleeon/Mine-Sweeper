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

// var mines = gLevel['beginner'].MINES;
// console.log(mines); // Output: 2

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
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j].isMine) strHTML += '<td>' + MINE + '</td>'
            else strHTML += '<td>' + '</td>'
        }
        strHTML += `</tr>\n`
    }
    // console.log(board)
    // console.log(strHTML)
    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
    // console.table(board)

}



function buildBoard() {
    const level = 4
    const board = []

    for (var i = 0; i < level; i++) {
        board.push([])

        for (var j = 0; j < level; j++) {
            board[i][j] = {
                mineAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,

                // console.log(board)
            }
        }
    }
    board[0][1].isMine = true
    board[2][3].isMine = true
    // board[1][1].isMine = true
    // board[1][0].isMine = true
    // for (var i = 0; i < level; i++) {
    //     for (var j = 0; j < level; j++) {
    //         board[i][j].mineAroundCount = setMinesNegsCount(board, i, j)
    //     }
    // }

    console.log(board)
    return board;
}

function setMinesNegsCount(board, rowIdx, colIdx) {
    var count = 0;
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue;

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue;
            if (j < 0 || j >= board[0].length) continue;

            var currCell = board[i][j];
            if (currCell.isMine) count++;
        }
    }
    return count;
}

function updateMineAroundCount(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            board[i][j].mineAroundCount = setMinesNegsCount(board, i, j);
        }
    }
    console.log(board[1][2])
}

const board = buildBoard();
updateMineAroundCount(board);

console.log(board[1][2].mineAroundCount);
// console.log(currCell.mineAroundCount);





// function setMinesNegsCount(board, rowIdx, colIdx) {
//     var count = 0;
//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
//         if (i < 0 || i >= board.length) continue;

//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
//             if (i === rowIdx && j === colIdx) continue;
//             if (j < 0 || j >= board[0].length) continue;

//             var currCell = board[i][j];
//             if (currCell.isMine) count++;
//         }
//     }
//     return count;
// }

// function renderBoard(board) {
//     console.log(board)
//     var strHTML = ''
//     for (var i = 0; i < board.length; i++) {
//         strHTML += `<tr>\n`
//         for (var j = 0; j < board[i].length; j++) {
//             if (board[i][j].isMine) {
//                 strHTML += '<td>' + MINE + '</td>'
//             } else {
//                 var mineCount = board[i][j].mineAroundCount
//                 if (mineCount > 0) {
//                     strHTML += `<td>${mineCount}</td>`
//                 } else {
//                     strHTML += '<td>' + '</td>'
//                 }
//             }
//         }
//         strHTML += `</tr>\n`
//     }
//     const elTable = document.querySelector('.board');
//     elTable.innerHTML = strHTML;
// }


function onCellClicked() {
}


////////////////////the victory modal //////////////////////////

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




///////////////////////////////////////////////////////


// var mines = gLevel['beginner'].MINES;
// console.log(mines); // Output: 2

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



// var res = getRandomIntInclusive(0, gBoard.length)
// console.log(res)

// function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//getEmptyCell --- pacman... cr...

