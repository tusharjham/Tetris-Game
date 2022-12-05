import { Box } from "@chakra-ui/react";
import React from "react";
import useGameOver from "../hooks/useGameOver";
import Menu from "./Menu";
import Tetris from "./Tetris";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const startGame = () => {
    resetGameOver();
  };
  return (
    <Box className="Game" p={6}>
      {gameOver ? (
        <Menu onClick={startGame} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </Box>
  );
};

export default Game;
