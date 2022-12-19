import { Box } from "@chakra-ui/react";
import React from "react";
import buildBoard from "../business/buildBoard";
import { transferToBoard } from "../business/Tetrominoes";
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
      right={{ base: "0%", sm: "1%", lg: "2%" }}
      top={{
        base: `${(index + 0.25) * 14}vh`,
        sm: `${(index + 0.13) * 16.5}vh`,
        lg: `${(index + 0.05) * 16.5}vh`,
      }}
      borderRadius={"10px"}
      height={{ base: "14%", sm: "17%" }}
      width={"20%"}
      boxShadow={"0px 0px 5px 1px whitesmoke"}
      boxSizing={"border-box"}
      padding={"14px 0px 0px 5px"}
      bg={"black"}
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
