import React, { useState } from "react";
import buildBoard from "../business/buildBoard";

const useBoard = (rows, columns) => {
  const [board] = useState(buildBoard(rows, columns));
  return [board];
};

export default useBoard;
