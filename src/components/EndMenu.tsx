import { ActionIcon, Box, Group, Paper, Text, Tooltip } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useGameStore } from "../core/store";
import { TiMediaPlay, TiHome } from "react-icons/ti";
import { MdLeaderboard } from "react-icons/md";

const GameEndMenu = () => {
  const { score, bestScore, play, home } = useGameStore(
    ({ score, bestScore, actions: { play, home } }) => ({
      score,
      play,
      home,
      bestScore,
    })
  );

  useHotkeys([
    ["Enter", play],
    ["Space", play],
  ]);

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
            <TiMediaPlay color="skyblue" size="48" />
          </ActionIcon>
        </Tooltip>
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
          >
            <MdLeaderboard color="skyblue" size="32" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default GameEndMenu;
