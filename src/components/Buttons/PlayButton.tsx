import { ActionIcon } from "@mantine/core";
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
    <ActionIcon
      style={{
        flexGrow: 1,
      }}
      size="xl"
      variant="default"
      onClick={play}
    >
      <TiMediaPlay size="48" />
    </ActionIcon>
  );
};

export default PlayButton;
