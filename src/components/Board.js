import { Box } from "@chakra-ui/react";
import React from "react";
import { defaultCell } from "../business/Cell";
import BoardCell from "./BoardCell";

const Board = ({ board }) => {
  return (
    <Box
      className="Board"
      height={"100%"}
      width={"70%"}
      display={"grid"}
      left={"0%"}
      gridTemplateRows={`repeat(${board.size.rows},1fr)`}
      gridTemplateColumns={`repeat(${board.size.columns},1fr)`}
    >
      {board.rows.map((row, y) =>
        row.map((cell, x) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </Box>
  );
};

export default Board;
