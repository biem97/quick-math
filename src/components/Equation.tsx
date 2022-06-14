import { Text } from "@mantine/core";
import { useStore } from "../store";

interface GameEquationProps {}

const GameEquation = ({}: GameEquationProps) => {
  const [firstValue, secondValue, sum] = useStore(
    ({ firstValue, secondValue, sum }) => [firstValue, secondValue, sum]
  );

  return (
    <div>
      <Text
        component="div"
        align="center"
        size="xl"
        color="white"
        weight={700}
        style={{ fontSize: "6rem", fontFamily: "Greycliff CF, sans-serif" }}
      >
        {`${firstValue} + ${secondValue}`}
      </Text>
      <Text
        component="div"
        align="center"
        size="xl"
        color="white"
        weight={700}
        style={{ fontSize: "6rem", fontFamily: "Greycliff CF, sans-serif" }}
      >
        {` = ${sum}`}
      </Text>
    </div>
  );
};

export default GameEquation;
