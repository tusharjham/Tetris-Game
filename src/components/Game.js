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
    <Box
      className="Game"
      pt={{ base: 4, sm: 6 }}
      pb={{ base: 4, sm: 6 }}
      ps={{ base: 4, sm: 4, md: 5, xl: 6 }}
      pe={{ base: 4, sm: 2, md: 3, xl: 6 }}
      height={"90%"}
      width={{ base: "83%", sm: "73%", md: "65%", lg: "60%", xl: "50%" }}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      borderRadius={"50px"}
      // alignItems={"center"}
      bg={"#0f033f"}
    >
      {gameOver ? (
        <Menu onClick={startGame} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </Box>
  );
};

export default Game;
