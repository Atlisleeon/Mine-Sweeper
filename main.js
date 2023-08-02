'use strict'


const mines = 0
const flags = 0


// THE MODEL
var gBoard = {
    mineAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOne: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gMines = 0




function onInit() {
    gBoard = createBoard()
    renderBoard(gBoard)

    console.table(gBoard)
    // console.log(gBoard)
}


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            const cell = board[i][j]

            var cellContent = ''
            if (cell.isShown === ???)
                if (cell.isMine === ???)
                    if (cell.isMarked === ???)

        }
    }
}

function createBoard() {
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


function play() {
    gBoard = nextMove(gBoard)
    renderBoard(gBoard)
}



// function renderCinema() {
//     var strHTML = "";
//     for (var i = 0; i < gCinema.length; i++) {
//         strHTML += `<tr class="cinema-row" >\n`;
//         for (var j = 0; j < gCinema[0].length; j++) {
//             const cell = gCinema[i][j];
//             // For cell of type SEAT add seat class:
//             var className = cell.isSeat ? "seat" : "";
//             if (cell.isBooked) {
//                 className += " booked";
//             }
//             // Add a seat title:
//             const title = `Seat: ${i + 1}, ${j + 1}`;
//             strHTML += `\t<td data-i="${i}" data-j="${j}"
//                                 title="${title}" class="cell ${className}" 
//                                 onclick="onCellClicked(this, ${i}, ${j})" >
//                              </td>\n`;
//         }
//         strHTML += `</tr>\n`;
//     }
//     const elSeats = document.querySelector(".cinema-seats");
//     elSeats.innerHTML = strHTML;
// }


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < board[i].length; j++) {
            const classStr = board[i][j] ? `class="occupied"` : ''
            const dataAttrStr = `data-i="${i}" data-j="${j}"`
            strHTML += `\t<td ${dataAttrStr} onclick="onCellClicked(this, ${i}, ${j})" ${classStr}>${board[i][j]}</td>\n`
        }
        strHTML += `</tr>\n`
    }
    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
    // console.table(board)
    // console.log(strHTML);
}

function countMinesAroundNumber(rowIdx, colIdx, board) {
    var minesCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i === rowIdx && j === colIdx) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[i].length) continue
            if (i === rowIdx && j === colIdx) continue
            if (board[i][j] === mines) minesCount++
        }
    }
    return minesCount
}









setMinesNegsCount()
onCellClicked()
minesAroundCount