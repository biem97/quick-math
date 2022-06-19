// Mantine UI
import { Box, ActionIcon, Group, Anchor } from "@mantine/core";
import { MdLeaderboard } from "react-icons/md";
import { TiMediaPlay, TiSocialGithub } from "react-icons/ti";

// Images
import GameLogo from "../assets/image/game_logo2.svg";

// Store
import { useGameStore } from "../core/store";

interface GameProps {}

const Home = ({}: GameProps) => {
  const { reset } = useGameStore(({ gameStatus, actions: { reset } }) => ({
    gameStatus,
    reset,
  }));

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "30px",
      }}
    >
      <Box>
        <img
          src={GameLogo}
          style={{
            marginTop: "20vh",
            flexBasis: "160px",
          }}
        />
      </Box>
      <Group mt="xl">
        <ActionIcon
          style={{
            width: "120px",
          }}
          size="xl"
          variant="default"
          onClick={reset}
        >
          <TiMediaPlay color="skyblue" size="32" />
        </ActionIcon>
        <ActionIcon
          style={{
            width: "120px",
          }}
          size="xl"
          variant="default"
        >
          <MdLeaderboard color="skyblue" size="32" />
        </ActionIcon>
        <Anchor href="https://github.com/biem97/quick-math" target="_blank">
          <ActionIcon
            style={{
              width: "120px",
            }}
            size="xl"
            variant="default"
          >
            <TiSocialGithub color="skyblue" size="46" />
          </ActionIcon>
        </Anchor>
      </Group>
    </Box>
  );
};

export default Home;
