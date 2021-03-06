import { Text } from "@mantine/core";
import { useGameStore } from "../core/store";

interface GameEquationProps {}

const GameEquation = ({}: GameEquationProps) => {
  const [firstValue, secondValue, sum] = useGameStore(
    ({ firstValue, secondValue, sum }) => [firstValue, secondValue, sum]
  );

  return (
    <div>
      <Text
        component="div"
        align="center"
        size="xl"
        weight={700}
        sx={{
          fontSize: "5rem",
          fontFamily: "Greycliff CF, sans-serif",
        }}
        id="equation"
      >
        {`${firstValue} + ${secondValue}`}
      </Text>
      <Text
        component="div"
        align="center"
        size="xl"
        weight={700}
        id="sum"
        sx={{
          fontSize: "5rem",
          fontFamily: "Greycliff CF, sans-serif",
        }}
      >
        {` = ${sum}`}
      </Text>
    </div>
  );
};

export default GameEquation;
