import { Box } from "@chakra-ui/react";
import React from "react";
import useBoard from "../hooks/useBoard";
import useGameStats from "../hooks/useGameStats";
import usePlayer from "../hooks/usePlayer";
import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesClear] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesClear,
  });
  return (
    <Box
      className="Tetris"
      position={"relative"}
      height={"100%"}
      width={"100%"}
    >
      <Box height={"100%"} width={"74%"} display={"flex"} alignItems={"center"}>
        <Board board={board} />
      </Box>
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </Box>
  );
};

export default Tetris;
