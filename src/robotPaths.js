class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    const boardLength = this.board.board.length;
    let result = 0;

    function recursive(rowPlace, colPlace, destinationPlace, board) {
      board.board = board.togglePiece(rowPlace, colPlace);

      if (rowPlace === destinationPlace && colPlace === destinationPlace) {
        result += 1;
        board.board = board.togglePiece(rowPlace, colPlace);
        return;
      }

      if (
        colPlace + 1 <= destinationPlace &&
        !board.hasBeenVisited(rowPlace, colPlace + 1)
      )
        recursive(rowPlace, colPlace + 1, destinationPlace, board);
      if (
        rowPlace + 1 <= destinationPlace &&
        !board.hasBeenVisited(rowPlace + 1, colPlace)
      )
        recursive(rowPlace + 1, colPlace, destinationPlace, board);

      if (colPlace - 1 >= 0 && !board.hasBeenVisited(rowPlace, colPlace - 1))
        recursive(rowPlace, colPlace - 1, destinationPlace, board);

      if (rowPlace - 1 >= 0 && !board.hasBeenVisited(rowPlace - 1, colPlace))
        recursive(rowPlace - 1, colPlace, destinationPlace, board);

      board.board = board.togglePiece(rowPlace, colPlace);
    }

    recursive(0, 0, boardLength - 1, this.board);
    return result;
  }
}

module.exports = { RobotPaths };
