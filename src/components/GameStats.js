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
        <Box>1</Box>
      </Box>
      <Box>
        <Box>Lines to Level</Box>
        <Box>10</Box>
      </Box>
      <Box>
        <Box>Points</Box>
        <Box>0</Box>
      </Box>
    </Box>
  );
};

export default GameStats;
