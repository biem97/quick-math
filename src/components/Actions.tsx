import { ActionIcon } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { TiTick, TiTimes } from "react-icons/ti";

// Store
import { useGameStore } from "../core/store";

const GameActions = () => {
  const { yes, no, gameStatus, end } = useGameStore(
    ({ gameStatus, actions: { yes, no, reset, end } }) => ({
      yes,
      no,
      reset,
      gameStatus,
      end,
    })
  );
  const isEnd = gameStatus === "END";

  useHotkeys([
    ["ArrowLeft", yes],
    ["ArrowRight", no],
    ["Escape", () => end],
  ]);

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
