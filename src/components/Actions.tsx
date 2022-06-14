import { ActionIcon } from "@mantine/core";
import { TiTick, TiTimes } from "react-icons/ti";

// Store
import { useStore } from "../store";

interface GameActionsProps {}

const GameActions = ({}: GameActionsProps) => {
  const { yes, no, gameStatus } = useStore(
    ({ yes, no, gameStatus, reset }) => ({
      yes,
      no,
      reset,
      gameStatus,
    })
  );
  const isEnd = gameStatus === "END";

  return (
    <>
      <ActionIcon
        style={{
          flexGrow: 1,
          height: "auto",
        }}
        variant="default"
        size="xl"
        onClick={yes}
        disabled={isEnd}
      >
        <TiTick color="skyblue" size="256" />
      </ActionIcon>
      <ActionIcon
        color="red"
        style={{
          flexGrow: 1,
          height: "auto",
        }}
        variant="default"
        size="xl"
        onClick={no}
        disabled={isEnd}
      >
        <TiTimes color="red" size="256" />
      </ActionIcon>
    </>
  );
};

export default GameActions;
