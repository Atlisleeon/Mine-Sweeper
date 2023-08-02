
randomMines(2)
function randomMines(mines) {

    var xxx = 0

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; i++) {

        }
    }

}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nextMove(board) {
    var newBoard = copyBoard(board)

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {


            if (click === gMines) continue
            if (click === numCell) {

            } else if (click === emptyCell) {

            }


            if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
                if (board[i][j] === '') newBoard[i][j] = LIFE
            } else if (board[i][j] === LIFE) {
                newBoard[i][j] = ''
            }
        }
    }
    return newBoard
}