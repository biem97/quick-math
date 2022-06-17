import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { TiRefresh } from "react-icons/ti";
import { useGameStore } from "../core/store";

const GameEndMenu = () => {
  const { score, reset } = useGameStore(({ score, actions: { reset } }) => ({
    score,
    reset,
  }));

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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: "darkgray",
        }}
      >
        <Text
          component="div"
          align="center"
          size="xl"
          weight={700}
          style={{ fontSize: "2.5rem", fontFamily: "Greycliff CF, sans-serif" }}
        >
          Current
        </Text>
        <Text
          component="div"
          align="center"
          size="sm"
          color="white"
          weight={700}
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
          <TiRefresh color="skyblue" size="56" />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default GameEndMenu;
