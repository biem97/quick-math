import { ActionIcon } from "@mantine/core";
import { useGameStore } from "../../core/store";
import { TiHome } from "react-icons/ti";

const HomeButton = () => {
  const { home } = useGameStore(({ actions: { home } }) => ({
    home,
  }));

  return (
    <ActionIcon
      style={{
        flexGrow: 1,
      }}
      size="xl"
      variant="default"
      onClick={home}
    >
      <TiHome size="32" />
    </ActionIcon>
  );
};

export default HomeButton;
