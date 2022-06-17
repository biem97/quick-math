// Mantine UI
import { Group, Center } from "@mantine/core";

// Components
import Actions from "../components/Actions";
import EndMenu from "../components/EndMenu";
import Equation from "../components/Equation";
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
    <>
      {isPlaying && <Timer />}
      <Group position="right">
        <Score />
      </Group>

      <Center
        style={{
          flexGrow: 1,
        }}
      >
        <Equation />
      </Center>

      <Group
        style={{
          flexBasis: "256px",
        }}
        position="apart"
        align="stretch"
        mb="sm"
      >
        {isEnd ? <EndMenu /> : <Actions />}
      </Group>
    </>
  );
};

export default Game;
