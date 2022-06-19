// Mantine UI
import { Group } from "@mantine/core";

// Images
import GameLogo from "../assets/image/game_logo.svg";
import {
  GitHubAnchor,
  PlayButton,
  ScoresBoardButton,
} from "../components/Buttons";

interface GameProps {}

const Home = ({}: GameProps) => {
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
        <PlayButton />
        <ScoresBoardButton />
        <GitHubAnchor />
      </Group>
    </Group>
  );
};

export default Home;
