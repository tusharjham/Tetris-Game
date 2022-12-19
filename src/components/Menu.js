import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Menu = ({ onClick }) => {
  return (
    <Box position={"absolute"} top={"20%"}>
      <Button
        onClick={onClick}
        height={{ base: "10vh", md: "12vh", lg: "15vh" }}
        width={{ base: "42vw", sm: "34vw", md: "28vw", lg: "24vw", xl: "20vw" }}
        borderRadius={"30px"}
        bg={"whiteAlpha.300"}
        color={"orange"}
        variant={"none"}
      >
        <Text fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}>
          Play Tetris
        </Text>
      </Button>
    </Box>
  );
};

export default Menu;
