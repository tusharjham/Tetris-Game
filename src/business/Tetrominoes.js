const className = "tetrominoes";

export const TETRIMINOES = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${className}__i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${className}__j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${className}__l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${className}__o`,
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    className: `${className}__s`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    className: `${className}__t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${className}__z`,
  },
};
export const randomTetrominoe = () => {
  const keys = Object.keys(TETRIMINOES);
  const index = Math.floor(Math.random() * keys.length);
  const key = keys[index];
  return TETRIMINOES[key];
};
export const transferToBoard = ({
  className,
  isOccupied,
  position,
  rows,
  shape,
}) => {
  shape.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell) {
        const occupied = isOccupied;
        const _y = y + position.row;
        const _x = x + position.column;
        rows[_y][_x] = { occupied, className };
      }
    });
  });
  return rows;
};

export const rotate = ({ piece, direction }) => {
  const newPiece = piece.map((row, rindex) => {
    return piece.map((col, cindex) => {
      return col[rindex];
    });
  });
  if (direction > 0) return newPiece.map((row) => row.reverse());
  return newPiece.reverse();
};
export const hasCollisions = ({ board, position, shape }) => {
  for (let i = 0; i < shape.length; i++) {
    const r = i + position.row;
    for (let j = 0; j < shape[i].length; j++) {
      const c = j + position.column;
      if (shape[i][j]) {
        if (board.rows[r] && board.rows[r][c] && board.rows[r][c].occupied) {
          return true;
        }
      }
    }
  }
  return false;
};

export const isWithinBoard = ({ board, position, shape }) => {
  for (let i = 0; i < shape.length; i++) {
    const r = i + position.row;
    for (let j = 0; j < shape[i].length; j++) {
      const c = j + position.column;
      if (shape[i][j]) {
        const isValidPosition = board.rows[r] && board.rows[r][c];
        if (!isValidPosition) {
          return false;
        }
      }
    }
  }
  return true;
};
