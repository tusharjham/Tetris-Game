import { Box } from "@chakra-ui/react";
import React from "react";

const GameStats = ({ gameStats }) => {
  return (
    <Box
      position={"absolute"}
      right={"-0.8%"}
      bottom={"0%"}
      width={"25%"}
      fontSize={"xl"}
      fontWeight={"bold"}
      boxSizing={"border-box"}
    >
      <Box>
        <Box>Level</Box>
        <Box>{gameStats.level}</Box>
      </Box>
      <Box>
        <Box>Lines to Level</Box>
        <Box>{gameStats.linesPerLevel - gameStats.linesCompleted}</Box>
      </Box>
      <Box>
        <Box>Points</Box>
        <Box>{gameStats.points}</Box>
      </Box>
    </Box>
  );
};

export default GameStats;
