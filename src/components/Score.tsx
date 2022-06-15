import { Text } from "@mantine/core";

// Store
import { useStore } from "../core/store";

interface ScoreProps {}

const Score = ({}: ScoreProps) => {
  const { score } = useStore(({ score }) => ({ score }));

  return (
    <Text
      align="center"
      size="xl"
      color="white"
      weight={700}
      style={{ fontSize: "2rem", fontFamily: "Greycliff CF, sans-serif" }}
    >
      {score}
    </Text>
  );
};

export default Score;
