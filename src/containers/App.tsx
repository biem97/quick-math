// Mantine UI
import { Container } from "@mantine/core";
import { useGameStore } from "../core/store";

// Containers
import Game from "./Game";
import Home from "./Home";

const App = () => {
  const { gameStatus } = useGameStore(({ gameStatus }) => ({ gameStatus }));

  return (
    <Container
      size="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "skyblue",
        height: "90vh",
      }}
    >
      {gameStatus === "NOT_READY" ? <Home /> : <Game />}
    </Container>
  );
};

export default App;
