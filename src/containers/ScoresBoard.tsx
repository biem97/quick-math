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
    <Box p="xl">
      <Title
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.blue[9]
              : theme.colors.dark[6],
          textAlign: "center",
        })}
        mb="md"
        order={1}
      >
        <FaTrophy /> Scores board <FaTrophy />
      </Title>
      <Group
        style={{
          width: "100%",
        }}
      >
        <Table
          sx={(theme) => ({
            borderRadius: 10,
            backgroundColor:
              theme.colorScheme === "light"
                ? theme.colors.blue[2]
                : theme.colors.gray[7],
          })}
          verticalSpacing="md"
          horizontalSpacing="xl"
          fontSize="xl"
        >
          <thead>
            <tr>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          {<tbody>{rows}</tbody>}
        </Table>
      </Group>
      <Group
        mt="xl"
        style={{
          width: "100%",
        }}
      >
        <PlayButton />
        <HomeButton />
      </Group>
    </Box>
  );
};

export default ScoresBoard;
