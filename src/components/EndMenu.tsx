import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useGameStore } from "../core/store";
import { TiRefresh, TiHome } from "react-icons/ti";
import { MdLeaderboard } from "react-icons/md";

const GameEndMenu = () => {
  const { score, reset, home } = useGameStore(
    ({ score, actions: { reset, home } }) => ({
      score,
      reset,
      home,
    })
  );

  useHotkeys([
    ["Enter", reset],
    ["Space", reset],
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
        withBorder
      >
        <Text
          component="div"
          align="center"
          size="xl"
          weight={700}
          sx={(theme) => ({
            fontSize: "2.5rem",
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
          style={{ fontSize: "2rem", fontFamily: "Greycliff CF, sans-serif" }}
        >
          {score}
        </Text>
      </Paper>
      <Group position="apart">
        <ActionIcon
          style={{
            flexGrow: 1,
          }}
          size="xl"
          variant="default"
          onClick={reset}
        >
          <TiRefresh color="skyblue" size="48" />
        </ActionIcon>
        <ActionIcon
          style={{
            flexGrow: 1,
          }}
          size="xl"
          variant="default"
          onClick={home}
        >
          <TiHome color="skyblue" size="32" />
        </ActionIcon>
        <ActionIcon
          style={{
            flexGrow: 1,
          }}
          size="xl"
          variant="default"
        >
          <MdLeaderboard color="skyblue" size="32" />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default GameEndMenu;
