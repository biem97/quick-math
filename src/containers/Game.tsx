// Mantine UI
import { Group, Center } from "@mantine/core";

// Components
import Actions from "../components/Actions";
import EndMenu from "../components/EndMenu";
import Equation from "../components/Equation";
import Score from "../components/Score";

// Store
import { useStore } from "../store";

interface GameProps {}

const Game = ({}: GameProps) => {
  const { gameStatus } = useStore(({ gameStatus }) => ({
    gameStatus,
  }));
  const isEnd = gameStatus === "END";

  return (
    <>
      <Group position="right">
        <Score />
      </Group>

      <Center
        style={{
          flexGrow: 1,
          // flexBasis: "384px",
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
