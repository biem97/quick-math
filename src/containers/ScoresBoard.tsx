// Mantine UI
import {
  Box,
  ActionIcon,
  Group,
  Anchor,
  Tooltip,
  Title,
  Table,
} from "@mantine/core";
import { MdLeaderboard } from "react-icons/md";
import { TiMediaPlay, TiSocialGithub } from "react-icons/ti";
import { FaTrophy } from "react-icons/fa";

// Store
import { useGameStore } from "../core/store";

interface GameProps {}

const ScoresBoard = ({}: GameProps) => {
  const { play, scoresBoard } = useGameStore(
    ({ gameStatus, scoresBoard, actions: { play } }) => ({
      scoresBoard,
      gameStatus,
      play,
    })
  );

  const rows = scoresBoard.map((score, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{score}</td>
    </tr>
  ));

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        border: "1px solid red",
        height: "100%",
      }}
    >
      <Title order={1}>
        <FaTrophy />
        {` Scores board `}
        <FaTrophy />
      </Title>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Table
          verticalSpacing="md"
          horizontalSpacing="xl"
          fontSize="xl"
          highlightOnHover
        >
          <thead>
            <tr>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          {<tbody>{rows}</tbody>}
        </Table>
      </Box>
      <Group mt="xl">
        <Tooltip label="Play" withArrow>
          <ActionIcon
            style={{
              width: "120px",
            }}
            size="xl"
            variant="default"
            onClick={play}
          >
            <TiMediaPlay color="skyblue" size="32" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Scores Board" withArrow>
          <ActionIcon
            style={{
              width: "120px",
            }}
            size="xl"
            variant="default"
          >
            <MdLeaderboard color="skyblue" size="32" />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="GitHub Source Code" withArrow>
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
        </Tooltip>
      </Group>
    </Box>
  );
};

export default ScoresBoard;
