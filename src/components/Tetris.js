import { Box } from "@chakra-ui/react";
import React from "react";
import useBoard from "../hooks/useBoard";
import Board from "./Board";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board] = useBoard(rows, columns);
  return (
    <Box position={"relative"}>
      <Board board={board} />
    </Box>
  );
};

export default Tetris;
