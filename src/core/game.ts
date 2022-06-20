import { GameState, GameStatus } from "./types";

// Constants
export const MAX_VALUE = 10;
export const MIN_VALUE = 1;
export const RANDOM_BOOLEAN_ODD = 0.5;
export const TIMEOUT_DURATION = 1500; // milliseconds

// Game Core
export const generateNextGame = (gameState: GameState): GameState => {
  const firstValue = generateRandomNumber(gameState.firstValue);
  const secondValue = generateRandomNumber(gameState.firstValue);
  const shouldBeFalsyEquation = generateRandomBoolean();
  console.log("shouldBeFalsyEquation: ", shouldBeFalsyEquation);
  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    sum = generateFalsySum(sum);
  }

  return {
    firstValue,
    secondValue,
    sum,
    score: gameState.score + 1,
    gameStatus: "PLAYING",
    timeoutDuration: TIMEOUT_DURATION,
  };
};

export const initializeGame = (gameStatus: GameStatus = "HOME"): GameState => {
  const firstValue = generateRandomNumber();
  const secondValue = generateRandomNumber();
  const shouldBeFalsyEquation = generateRandomBoolean();
  let sum = firstValue + secondValue;

  if (shouldBeFalsyEquation) {
    sum = generateFalsySum(sum);
  }

  return {
    firstValue,
    secondValue,
    sum,
    score: 0,
    gameStatus,
    timeoutDuration: TIMEOUT_DURATION,
  };
};

// Helper functions
export const generateFalsySum = (sum: number): number => {
  const plusOrMinusOne = generateRandomBoolean() ? 1 : -1;
  const differentValue = plusOrMinusOne * Math.floor(Math.random() * 2) + 2;
  let newSum = sum + differentValue;

  if (newSum <= 0) {
    return 1;
  }

  return newSum;
};

export const generateRandomNumber = (previous?: number): number => {
  const randomNumber =
    Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE)) + MIN_VALUE;

  // If there's no previous number, return random number
  if (!previous) {
    return randomNumber;
  }

  // Avoid generate duplicate number
  if (randomNumber === previous) {
    return randomNumber + Math.floor(Math.random() * 2) + 1;
  }

  return randomNumber;
};

export const generateRandomBoolean = (): boolean =>
  Math.random() <= RANDOM_BOOLEAN_ODD;
