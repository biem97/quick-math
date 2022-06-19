// Mantine UI
import { ActionIcon, Group, Anchor, Tooltip } from "@mantine/core";
import { MdLeaderboard } from "react-icons/md";
import { TiMediaPlay, TiSocialGithub } from "react-icons/ti";

// Images
import GameLogo from "../assets/image/game_logo.svg";

// Store
import { useGameStore } from "../core/store";

interface GameProps {}

const Home = ({}: GameProps) => {
  const { play, seeScoreBoard } = useGameStore(
    ({ gameStatus, actions: { play, seeScoreBoard } }) => ({
      gameStatus,
      play,
      seeScoreBoard,
    })
  );

  return (
    <Group
      direction="column"
      align="center"
      style={{
        justifyContent: "center",
        height: "100%",
      }}
      px="md"
    >
      <img src={GameLogo} />
      <Group
        mt="xl"
        style={{
          width: "80%",
        }}
      >
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
            <TiMediaPlay color="skyblue" size="32" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{
            flexGrow: 1,
          }}
          label="Scores Board"
          withArrow
        >
          <ActionIcon
            style={{
              width: "100%",
            }}
            size="xl"
            variant="default"
            onClick={seeScoreBoard}
          >
            <MdLeaderboard color="skyblue" size="32" />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{
            flexGrow: 1,
          }}
          label="GitHub Source Code"
          withArrow
        >
          <Anchor href="https://github.com/biem97/quick-math" target="_blank">
            <ActionIcon
              style={{
                width: "100%",
              }}
              size="xl"
              variant="default"
            >
              <TiSocialGithub color="skyblue" size="46" />
            </ActionIcon>
          </Anchor>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default Home;
