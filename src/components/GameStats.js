import { Box } from "@chakra-ui/react";
import React from "react";

const GameStats = ({ gameStats }) => {
  return (
    <Box
      position={"absolute"}
      right={{ base: "0%" }}
      bottom={{ base: "5%", sm: "3%", md: "3%" }}
      width={{ base: "22%" }}
      fontSize={{ base: "12px", sm: "sm", md: "md", lg: "lg" }}
      fontWeight={"bold"}
      boxSizing={"border-box"}
      color={"white"}
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
