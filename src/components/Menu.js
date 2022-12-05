import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Menu = ({ onClick }) => {
  return (
    <Box>
      <Button onClick={onClick}>Play Tetris</Button>
    </Box>
  );
};

export default Menu;
