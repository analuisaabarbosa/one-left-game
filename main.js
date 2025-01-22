const matrix = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0]
]

const gameBoard = document.getElementById("board");

for(let l = 0; l < matrix.length; l++ ) {
    for(let c = 0; c < matrix[l].length; c++) {
        const cell = document.createElement("div");
        cell.className = matrix[l][c] === 0 ? 'empty' : 'peg';
        gameBoard.appendChild(cell);
    }
}