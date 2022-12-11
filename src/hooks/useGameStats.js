import React, { useCallback, useState } from "react";

const buildGameStats = () => {
  return {
    level: 0,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0,
  };
};

const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());
  const addLinesClear = useCallback(() => {}, []);
  return [gameStats, addLinesClear];
};

export default useGameStats;
