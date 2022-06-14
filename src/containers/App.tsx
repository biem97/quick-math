// Mantine UI
import { Container } from "@mantine/core";

// Containers
import Game from "./Game";

const App = () => {
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
      <Game />
    </Container>
  );
};

export default App;
