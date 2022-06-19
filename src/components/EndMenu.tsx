import { Box, Group, Paper, Text } from "@mantine/core";
import { PlayButton, HomeButton, ScoresBoardButton } from "./Buttons";
import { useGameStore } from "../core/store";

const GameEndMenu = () => {
  const { score, bestScore } = useGameStore(({ score, bestScore }) => ({
    score,
    bestScore,
  }));

  return (
    <Group
      direction="column"
      align="stretch"
      style={{
        flexGrow: 4,
      }}
    >
      <Paper
        sx={(sx) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: sx.colors.gray[4],
        })}
        radius="lg"
        py="xl"
        withBorder
      >
        <Box>
          <Text
            component="div"
            align="center"
            size="xl"
            weight={700}
            sx={(theme) => ({
              fontSize: "2.5rem",
              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.lg,
              },
              fontFamily: "Greycliff CF, sans-serif",
              color: theme.colors.blue[5],
            })}
          >
            Current
          </Text>
          <Text
            component="div"
            align="center"
            color="white"
            weight={900}
            sx={(theme) => ({
              fontSize: "2rem",
              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.md,
              },
              fontFamily: "Greycliff CF, sans-serif",
            })}
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
            color="skyblue"
            sx={(theme) => ({
              fontSize: "2.5rem",
              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.lg,
              },
              fontFamily: "Greycliff CF, sans-serif",
              color: theme.colors.blue[5],
            })}
          >
            Best Score
          </Text>
          <Text
            component="div"
            align="center"
            color="white"
            weight={900}
            sx={(theme) => ({
              fontSize: "2rem",
              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.md,
              },
              fontFamily: "Greycliff CF, sans-serif",
            })}
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
