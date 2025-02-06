const matrix = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0]
];

const gameBoard = document.getElementById("board");
let selectedPiece = null; 

function renderBoard() {
    gameBoard.innerHTML = ""; 
    gameBoard.style.gridTemplateColumns = `repeat(${matrix.length}, 1fr)`; 

    for (let l = 0; l < matrix.length; l++) {
        for (let c = 0; c < matrix[l].length; c++) {
            const cell = document.createElement("div");

            if ((l < 2 || l > 4) && (c < 2 || c > 4)) {
                cell.style.visibility = "hidden";
            }

            cell.className = matrix[l][c] === 0 ? 'empty' : 'peg';
            cell.dataset.row = l;
            cell.dataset.col = c;

            cell.addEventListener("click", handleClick);

            gameBoard.appendChild(cell);
        }
    }
}

function handleClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (selectedPiece) {
        if (matrix[row][col] === 0 && isValidMove(selectedPiece.row, selectedPiece.col, row, col)) {
            movePiece(selectedPiece.row, selectedPiece.col, row, col);
        }
        selectedPiece = null;
    } else if (matrix[row][col] === 1) {
        selectedPiece = { row, col };
    }
}

function isValidMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(fromRow - toRow) === 2 && fromCol === toCol) {
        const midRow = (fromRow + toRow) / 2;
        return matrix[midRow][fromCol] === 1; 
    }
    if (Math.abs(fromCol - toCol) === 2 && fromRow === toRow) {
        const midCol = (fromCol + toCol) / 2;
        return matrix[fromRow][midCol] === 1;
    }
    return false;
}

function movePiece(fromRow, fromCol, toRow, toCol) {
    matrix[fromRow][fromCol] = 0;
    matrix[toRow][toCol] = 1;
    matrix[(fromRow + toRow) / 2][(fromCol + toCol) / 2] = 0;

    renderBoard();
}

renderBoard();
