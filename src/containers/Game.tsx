// Mantine UI
import { Group, Center } from "@mantine/core";

// Components
import Actions from "../components/Actions";
import EndMenu from "../components/EndMenu";
import Equation from "../components/Equation";
import Helpers from "../components/Helpers";
import Score from "../components/Score";
import Timer from "../components/Timer";

// Store
import { useGameStore } from "../core/store";

interface GameProps {}

const Game = ({}: GameProps) => {
  const { gameStatus } = useGameStore(({ gameStatus }) => ({
    gameStatus,
  }));
  const isEnd = gameStatus === "END";
  const isPlaying = gameStatus === "PLAYING";

  return (
    <Group
      style={{
        height: "100%",
      }}
      direction="column"
      position="center"
      align="stretch"
    >
      {isPlaying && <Timer />}
      <Group>
        <Helpers />
        <div style={{ flexGrow: 1 }} />
        <Score />
      </Group>

      <Center
        style={{
          flexGrow: 1,
        }}
      >
        <Equation />
      </Center>

      <Group position="apart" mb="xl">
        {isEnd ? <EndMenu /> : <Actions />}
      </Group>
    </Group>
  );
};

export default Game;
