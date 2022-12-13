import { Input } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { Action, actionForKey } from "../business/Input";
import { playerController } from "../business/PlayerController";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
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
    handleInput({ action });
  };
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [player]);
  return (
    <>
      {/* <Input
        className="GameController"
        type={"text"}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus
      /> */}
    </>
  );
};

export default GameController;
