import { GameState } from "./types";

// Game Core
export const generateEquation = (gameState: GameState) => {
  let firstValue = generateRandomNumber();
  let secondValue = generateRandomNumber();
  const shouldBeFalsyEquation = generateRandomBoolean();

  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
  }

  if (!gameState) {
    return {
      firstValue,
      secondValue,
      sum,
    };
  }

  if (firstValue === gameState.firstValue) {
    firstValue += generateRandomDifferentValue();
  }

  if (secondValue === gameState.secondValue) {
    secondValue += generateRandomDifferentValue();
  }

  sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
  }

  return {
    firstValue,
    secondValue,
    sum,
  };
};

export const initializeGame = (): GameState => {
  const firstValue = generateRandomNumber();
  const secondValue = generateRandomNumber();
  const shouldBeFalsyEquation = generateRandomBoolean();
  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
  }

  return {
    firstValue,
    secondValue,
    gameStatus: "PLAYING",
    score: 0,
    sum,
  };
};

// Constants
export const MAX_VALUE = 10;
export const MIN_VALUE = 1;
export const RANDOM_BOOLEAN_ODD = 0.5;

// Helper functions
export const generateRandomDifferentValue = (): number => {
  const differentValue = Math.floor(Math.random() * 4) - 2;

  if (differentValue === 0) {
    return 1;
  }

  return differentValue;
};

export const generateRandomNumber = (): number =>
  Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE;

export const generateRandomBoolean = (): boolean =>
  Math.random() <= RANDOM_BOOLEAN_ODD;
