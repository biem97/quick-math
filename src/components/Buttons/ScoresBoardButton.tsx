import { ActionIcon, Tooltip } from "@mantine/core";
import { useGameStore } from "../../core/store";
import { MdLeaderboard } from "react-icons/md";

const ScoresBoardButton = () => {
  const { seeScoresBoard } = useGameStore(
    ({ actions: { seeScoresBoard } }) => ({
      seeScoresBoard,
    })
  );

  return (
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
        onClick={seeScoresBoard}
      >
        <MdLeaderboard color="skyblue" size="32" />
      </ActionIcon>
    </Tooltip>
  );
};

export default ScoresBoardButton;
