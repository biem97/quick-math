// Mantine UI
import { Box, Group } from "@mantine/core";

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
    <div>
      <Box mb="xl">
        <img
          style={{
            width: "360px",
          }}
          src={GameLogo}
        />
      </Box>
      <Group mt="xl">
        <PlayButton />
        <ScoresBoardButton />
        <GitHubAnchor />
      </Group>
    </div>
  );
};

export default Home;
