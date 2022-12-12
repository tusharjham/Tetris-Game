import React, { useEffect, useState } from "react";
import buildBoard, { nextBoard } from "../business/buildBoard";

const useBoard = ({ rows, columns, player, resetPlayer, addLinesClear }) => {
  const [board, setBoard] = useState(buildBoard(rows, columns));
  useEffect(() => {
    setBoard((prevBoard) =>
      nextBoard({
        board: prevBoard,
        player,
        resetPlayer,
        addLinesClear,
      })
    );
  }, [player, resetPlayer, addLinesClear]);
  return [board];
};

export default useBoard;
