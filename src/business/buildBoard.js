import React from "react";
import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

const buildBoard = (rows, columns) => {
  const board = new Array(rows);
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      board[i][j] = defaultCell;
    }
  }
  return {
    rows: board,
    size: { rows, columns },
  };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesClear }) => {
  const { tetromino, position, isCollided } = player;
  let rows = board.rows.map((row) =>
    row.map((col) => (col.occupied ? col : defaultCell))
  );
  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: isCollided,
    position,
    rows,
    shape: tetromino.shape,
  });
  return {
    rows,
    size: board.size,
  };
};

export default buildBoard;
