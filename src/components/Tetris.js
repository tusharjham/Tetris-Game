import { Box } from "@chakra-ui/react";
import React from "react";
import useBoard from "../hooks/useBoard";
import useGameStats from "../hooks/useGameStats";
import usePlayer from "../hooks/usePlayer";
import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [board] = useBoard(rows, columns);
  const [gameStats, addLinesClear] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  return (
    <Box
      position={"relative"}
      height={"88%"}
      width={"100%"}
      border={"3px solid black"}
    >
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </Box>
  );
};

export default Tetris;
