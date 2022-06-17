import { GameState } from "./types";

// Constants
export const MAX_VALUE = 10;
export const MIN_VALUE = 1;
export const RANDOM_BOOLEAN_ODD = 0.5;
export const TIMEOUT_DURATION = 1500; // milliseconds

// Game Core
export const generateNextGame = (gameState: GameState): GameState => {
  let firstValue = generateRandomNumber();
  let secondValue = generateRandomNumber();
  const shouldBeFalsyEquation = generateRandomBoolean();

  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    const differentialValue = generateRandomDifferentValue();
    sum += differentialValue;
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
    gameStatus: "PLAYING",
    score: gameState.score + 1,
    timeoutDuration: TIMEOUT_DURATION,
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
    gameStatus: "READY",
    score: 0,
    sum,
    timeoutDuration: TIMEOUT_DURATION,
  };
};

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
