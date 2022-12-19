import { Box } from "@chakra-ui/react";
import React from "react";
import BoardCell from "./BoardCell";

const Board = ({ board }) => {
  return (
    <Box
      className="Board"
      height={{ base: "93%", sm: "96%", md: "97%", lg: "99%", xl: "100%" }}
      width={"100%"}
      display={"grid"}
      left={"0%"}
      gridTemplateRows={`repeat(${board.size.rows},1fr)`}
      gridTemplateColumns={`repeat(${board.size.columns},1fr)`}
      boxShadow={"0px 0px 5px 1px white"}
      borderRadius={"20px"}
      padding={"5px"}
      bg={"black"}
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
