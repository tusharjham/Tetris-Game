import { Box } from "@chakra-ui/react";
import React from "react";
import buildBoard from "../business/buildBoard";
import { defaultCell } from "../business/Cell";
import { randomTetrominoe, transferToBoard } from "../business/Tetrominoes";
import BoardCell from "./BoardCell";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;
  const board = buildBoard(4, 4);
  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });
  return (
    <Box
      className="Preview"
      position={"absolute"}
      right={"0%"}
      top={`${index * 20}vh`}
      borderRadius={"10px"}
      height={"25%"}
      width={"25%"}
      border={"2px solid green"}
    >
      <Box
        className="Preview-Board"
        display={"grid"}
        gridTemplateRows={`repeat(${4},1fr)`}
        gridTemplateColumns={`repeat(${4},1fr)`}
        width={"100%"}
        height={"84%"}
      >
        {board.rows.map((row, y) =>
          row.map((col, x) => {
            return <BoardCell key={x * board.size.columns + x} cell={col} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default Preview;
