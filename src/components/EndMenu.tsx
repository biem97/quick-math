import { Box, Group, Paper, Text } from "@mantine/core";
import { PlayButton, HomeButton, ScoresBoardButton } from "./Buttons";
import { useGameStore } from "../core/store";

const GameEndMenu = () => {
  const { score, bestScore } = useGameStore(({ score, bestScore }) => ({
    score,
    bestScore,
  }));

  return (
    <Group direction="column" align="stretch">
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
        }}
        radius="lg"
        py="xs"
        withBorder
      >
        <Box>
          <Text
            component="div"
            align="center"
            size="xl"
            weight={700}
            sx={(theme) => ({
              fontSize: "2rem",
              fontFamily: "Greycliff CF, sans-serif",
            })}
          >
            Current
          </Text>
          <Text
            component="div"
            align="center"
            weight={900}
            style={{
              fontSize: "1.5rem",
              fontFamily: "Greycliff CF, sans-serif",
            }}
          >
            {score}
          </Text>
        </Box>
        <Box>
          <Text
            component="div"
            align="center"
            size="xl"
            weight={700}
            sx={(theme) => ({
              fontSize: "2rem",
              fontFamily: "Greycliff CF, sans-serif",
            })}
          >
            Best Score
          </Text>
          <Text
            component="div"
            align="center"
            weight={900}
            style={{
              fontSize: "1.5rem",
              fontFamily: "Greycliff CF, sans-serif",
            }}
          >
            {bestScore}
          </Text>
        </Box>
      </Paper>

      <Group position="apart">
        <PlayButton />
        <HomeButton />
        <ScoresBoardButton />
      </Group>
    </Group>
  );
};

export default GameEndMenu;
