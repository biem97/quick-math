import { ActionIcon } from "@mantine/core";
import { TiHome } from "react-icons/ti";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

// Store
import { useGameStore } from "../core/store";
import { useHotkeys } from "@mantine/hooks";
import ThemeToggle from "./Buttons/ThemeToggle";

const Helpers = () => {
  const { isSoundOn, toggleSound } = useGameStore(
    ({ isSoundOn, actions: { toggleSound } }) => ({ isSoundOn, toggleSound })
  );

  useHotkeys([["m", toggleSound]]);

  return (
    <>
      <ThemeToggle />
      <ActionIcon
        sx={(theme) => ({
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

export default Helpers;
