import { useCallback, useState } from "react";
import levelUp from "../media/levelUp.wav";
const buildGameStats = () => {
  return {
    level: 1,
    linesCompleted: 0,
    linesPerLevel: 10,
    points: 0,
  };
};

const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());
  const addLinesClear = useCallback((lines) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100;
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level =
        newLinesCompleted >= linesPerLevel
          ? previous.level + 1
          : previous.level;
      if (level != previous.level) {
        const beat = new Audio(levelUp);
        beat.play();
      }
      const linesCompleted = newLinesCompleted % linesPerLevel;
      return {
        level,
        linesCompleted,
        linesPerLevel,
        points,
      };
    }, []);
  }, []);
  return [gameStats, addLinesClear];
};

export default useGameStats;
