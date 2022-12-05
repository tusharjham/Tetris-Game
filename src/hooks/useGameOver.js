import React, { useCallback, useState } from "react";

const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true);
  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);
  return [gameOver, setGameOver, resetGameOver];
};

export default useGameOver;
