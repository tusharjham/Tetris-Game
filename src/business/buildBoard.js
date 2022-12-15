import React from "react";
import { defaultCell } from "./Cell";
import { movePlayer } from "./PlayerController";
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

const findDropPosition = ({ board, position, shape }) => {
  let row = 0;
  let max = board.size.rows - position.row + 1;
  for (let i = 0; i < max; i++) {
    const delta = { row: i, column: 0 };
    const result = movePlayer({ delta, position, shape, board });
    const { collided } = result;
    if (collided) break;
    row = position.row + i;
  }
  return { ...position, row };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesClear }) => {
  const { tetromino, position, isCollided } = player;
  let rows = board.rows.map((row) =>
    row.map((col) => (col.occupied ? col : { ...defaultCell }))
  );
  const dropPosition = findDropPosition({
    board,
    position,
    shape: tetromino.shape,
  });
  // Placing the ghost
  const cls = ` ${tetromino.className} ${player.isFastDropping ? "" : "ghost"}`;
  rows = transferToBoard({
    className: cls,
    isOccupied: player.isFastDropping,
    position: dropPosition,
    rows,
    shape: tetromino.shape,
  });
  // Placing the piece
  if (!player.isFastDropping) {
    rows = transferToBoard({
      className: tetromino.className,
      isOccupied: isCollided,
      position,
      rows,
      shape: tetromino.shape,
    });
  }
  if (player.isCollided || player.isFastDropping) {
    resetPlayer();
  }
  return {
    rows,
    size: board.size,
  };
};

export default buildBoard;
