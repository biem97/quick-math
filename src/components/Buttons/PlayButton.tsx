import { ActionIcon, Tooltip } from "@mantine/core";
import { useGameStore } from "../../core/store";
import { TiMediaPlay } from "react-icons/ti";
import { useHotkeys } from "@mantine/hooks";

const PlayButton = () => {
  const { play } = useGameStore(({ actions: { play } }) => ({
    play,
  }));

  useHotkeys([
    ["Enter", play],
    ["Space", play],
  ]);

  return (
    <Tooltip
      style={{
        flexGrow: 1,
      }}
      label="Play"
      withArrow
    >
      <ActionIcon
        style={{
          width: "100%",
        }}
        size="xl"
        variant="default"
        onClick={play}
      >
        <TiMediaPlay color="skyblue" size="48" />
      </ActionIcon>
    </Tooltip>
  );
};

export default PlayButton;
