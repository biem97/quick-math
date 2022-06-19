import { ActionIcon } from "@mantine/core";
import { useHotkeys, useMediaQuery } from "@mantine/hooks";
import { TiTick, TiTimes } from "react-icons/ti";

// Store
import { useGameStore } from "../core/store";

const GameActions = () => {
  const { yes, no, gameStatus, end } = useGameStore(
    ({ gameStatus, actions: { yes, no, end } }) => ({
      yes,
      no,
      gameStatus,
      end,
    })
  );
  const largeScreen = useMediaQuery("(min-width: 900px)");

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
        <TiTick color="skyblue" size={largeScreen ? "256" : "128"} />
      </ActionIcon>
      <ActionIcon
        style={{
          flexGrow: 1,
          height: "auto",
        }}
        variant="default"
        size="xl"
        onClick={no}
        disabled={isEnd}
      >
        <TiTimes color="red" size={largeScreen ? "256" : "128"} />
      </ActionIcon>
    </>
  );
};

export default GameActions;
