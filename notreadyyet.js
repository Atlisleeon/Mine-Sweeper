
// // randomMines(2)
// // function randomMines(mines) {

// //     var xxx = 0

// //     for (var i = 0; i < board.length; i++) {
// //         for (var j = 0; j < board[0].length; i++) {

// //         }
// //     }

// // }

// // function getRandomIntInclusive(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // function nextMove(board) {
// //     var newBoard = copyBoard(board)

// //     for (var i = 0; i < board.length; i++) {
// //         for (var j = 0; j < board[0].length; j++) {


// //             if (click === gMines) continue
// //             if (click === numCell) {

// //             } else if (click === emptyCell) {

// //             }


// //             if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
// //                 if (board[i][j] === '') newBoard[i][j] = LIFE
// //             } else if (board[i][j] === LIFE) {
// //                 newBoard[i][j] = ''
// //             }
// //         }
// //     }
// //     return newBoard
// // }


// // // not ready at all
// // function createBoard() {
// //     var board = []

// //     for (var i = 0; i < boardLevel; i++) {
// //         board.push([])

// //         for (var j = 0; j < boardLevel; j++) {
// //             board[i][j] = boardLevel ? mines : ''
// //             // console.log()
// //         }
// //     }
// //     return board;
// // }


// // function renderBoard(board) {
// //     var strHTML = ''
// //     for (var i = 0; i < board.length; i++) {

// //         strHTML += `<tr>`

// //         for (var j = 0; j < board[0].length; j++) {
// //             const cell = board[i][j]

// //             var cellContent = ''
// //             if (cell.isShown === ???)
// //                 if (cell.isMine === ???)
// //                     if (cell.isMarked === ???)

// //         }
// //         strHTML += `<tr>`
// //     }
// // }


// // when mines are marked and cells are shown
// function checkGameOver() {
// }

// // When user clicks a cell with no mines around, we need to open not only that cell, but also its neighbors.
// function expandShown(board, elCell, i, j) {
// }

// // Called when a cell is right- clicked
// // See how you can hide the context menu on right click
// onCellMarked(elCell){
// }

// // Called when a cell is clicked
// onCellClicked(elCell, i, j){
// }







// function addMines(board) {
//     var cell = getEmptyCell(board)
//     // console.log('emptyPos', emptyPos)

//     // if (!emptyPos) return
//     //model
//     board[cell.i][cell.j] = MINES
//     //DOM
//     renderCell(cell, MINES)
// }



function setMinesNegsCount(board) {
    var numRows = board.length;
    var numCols = board[0].length;
    var numMines = gLevel['beginner'].MINES;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var placedMines = 0;
    while (placedMines < numMines) {
        var row = getRandomInt(0, numRows - 1);
        var col = getRandomInt(0, numCols - 1);

        if (board[row][col] !== 'MINE') {
            board[row][col] = 'MINE';
            placedMines++;

            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    var neighborRow = row + i;
                    var neighborCol = col + j;
                    if (neighborRow >= 0 && neighborRow < numRows && neighborCol >= 0 && neighborCol < numCols) {
                        if (board[neighborRow][neighborCol] !== 'MINE') {
                            board[neighborRow][neighborCol]++;
                        }
                    }
                }
            }
        }
    }
    console.log('MINE')
}

// var gLevel = {
//     beginner: {
//         SIZE: [4, 4],
//         MINES: 2,