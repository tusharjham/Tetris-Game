import { Box } from "@chakra-ui/react";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <Box
      className="App"
      height={"100vh"}
      width={"100vw"}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      bg={"#09012a"}
    >
      <Game rows={20} columns={13} />
    </Box>
  );
}

export default App;
