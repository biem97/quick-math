import { ActionIcon } from "@mantine/core";
import { TiHome } from "react-icons/ti";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

// Store
import { useGameStore } from "../core/store";
import { useHotkeys } from "@mantine/hooks";

const Sound = () => {
  const { isSoundOn, toggleSound } = useGameStore(
    ({ isSoundOn, actions: { toggleSound } }) => ({ isSoundOn, toggleSound })
  );

  useHotkeys([["m", toggleSound]]);

  return (
    <>
      <ActionIcon
        sx={(theme) => ({
          color: theme.colors.gray[0],
          ":hover": {
            color: theme.colors.gray[6],
          },
          height: "auto",
        })}
        size="xl"
        onClick={toggleSound}
      >
        {isSoundOn ? <HiVolumeUp size="32px" /> : <HiVolumeOff size="32px" />}
      </ActionIcon>
    </>
  );
};

export default Sound;
