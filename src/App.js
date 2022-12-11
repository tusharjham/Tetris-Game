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
    >
      <Game rows={20} columns={10} />
    </Box>
  );
}

export default App;
