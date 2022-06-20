// Mantine UI
import { Group, Title, Table, Text, Box } from "@mantine/core";
import { FaTrophy } from "react-icons/fa";

// Store
import { useGameStore } from "../core/store";
import { HomeButton, PlayButton } from "../components/Buttons";

interface GameProps {}

const ScoresBoard = ({}: GameProps) => {
  const { scoresBoard } = useGameStore(({ scoresBoard }) => ({
    scoresBoard,
  }));

  const rows = scoresBoard.map((score, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <Text weight="bolder" size="xl">
          {score}
        </Text>
      </td>
    </tr>
  ));

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Title
        style={{
          textAlign: "center",
        }}
        order={2}
      >
        <FaTrophy /> Scores board <FaTrophy />
      </Title>
      <Table
        style={{
          borderRadius: 10,
        }}
        fontSize="xl"
        highlightOnHover
        my="xs"
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Score</th>
          </tr>
        </thead>
        {<tbody>{rows}</tbody>}
      </Table>
      <Group>
        <PlayButton />
        <HomeButton />
      </Group>
    </Box>
  );
};

export default ScoresBoard;
