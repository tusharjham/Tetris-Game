import React from "react";
import { defaultCell } from "./Cell";

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

export default buildBoard;
