import { Text } from "@mantine/core";

// Store
import { useGameStore } from "../core/store";

const Score = () => {
  const { score } = useGameStore(({ score }) => ({ score }));

  return (
    <Text
      align="center"
      size="xl"
      color="white"
      weight={700}
      style={{
        fontSize: "2rem",
        fontFamily: "Greycliff CF, sans-serif",
      }}
    >
      {score}
    </Text>
  );
};

export default Score;
