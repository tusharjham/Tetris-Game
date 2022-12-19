import { useInterval } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";
import { useDropTime } from "../hooks/useDropTime";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });
  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);
  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };
  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (dropTime && action === Action.Quit) {
      setGameOver(true);
    } else {
      if (!dropTime) return;
      handleInput({ action });
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [player, dropTime]);
  return <></>;
};

export default GameController;
