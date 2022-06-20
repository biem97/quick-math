import { ActionIcon } from "@mantine/core";
import { useGameStore } from "../../core/store";
import { MdLeaderboard } from "react-icons/md";

const ScoresBoardButton = () => {
  const { seeScoresBoard } = useGameStore(
    ({ actions: { seeScoresBoard } }) => ({
      seeScoresBoard,
    })
  );

  return (
    <ActionIcon
      style={{
        flexGrow: 1,
      }}
      size="xl"
      variant="default"
      onClick={seeScoresBoard}
    >
      <MdLeaderboard size="32" />
    </ActionIcon>
  );
};

export default ScoresBoardButton;
