import { ActionIcon, Tooltip } from "@mantine/core";
import { useGameStore } from "../../core/store";
import { TiHome } from "react-icons/ti";

const HomeButton = () => {
  const { home } = useGameStore(({ actions: { home } }) => ({
    home,
  }));

  return (
    <Tooltip
      style={{
        flexGrow: 1,
      }}
      label="Home"
      withArrow
    >
      <ActionIcon
        style={{
          width: "100%",
        }}
        size="xl"
        variant="default"
        onClick={home}
      >
        <TiHome color="skyblue" size="32" />
      </ActionIcon>
    </Tooltip>
  );
};

export default HomeButton;
