import { useCallback, useState } from "react";
import { randomTetrominoe } from "../business/Tetrominoes";

const buildPlayer = (prev) => {
  let tetrominoes;
  if (prev) {
    tetrominoes = [...prev.tetrominoes];
    tetrominoes.unshift(randomTetrominoe());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetrominoe());
  }
  return {
    isCollided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
};
const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());
  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);
  return [player, setPlayer, resetPlayer];
};

export default usePlayer;
