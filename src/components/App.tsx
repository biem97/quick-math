import { useState } from "react";
import { Group, Button, Container } from "@mantine/core";
import {
  generateRandomBoolean,
  generateRandomSum,
  generateTwoValue,
} from "../utils";

function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<"ready" | "playing" | "finished">(
    "ready"
  );

  const sum = generateRandomSum();
  const shouldBeFalsySum = generateRandomBoolean();

  const [a, b] = generateTwoValue(sum, shouldBeFalsySum);

  const handleNoButton = () => {
    if (!shouldBeFalsySum) {
      setGameState("finished");
    }

    setScore((prev) => prev + 1);
  };

  return (
    <Container
      size="xs"
      style={{
        backgroundColor: "ButtonHighlight",
        height: "100vh",
      }}
    >
      <div>Score: {score}</div>
      <div>{`${a} + ${b} = ${sum}`}</div>
      <div>gameState: {gameState}</div>
      <div>shouldBeFalsySum: {shouldBeFalsySum ? "true" : "false"}</div>
      <Group position="apart">
        <Button color="red" onClick={handleNoButton}>
          No
        </Button>
        <Button
          color="green"
          onClick={() => {
            setScore((prev) => prev + 1);
          }}
        >
          Yes
        </Button>
      </Group>
    </Container>
  );
}

export default App;
