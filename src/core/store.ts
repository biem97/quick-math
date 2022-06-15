import create from "zustand";
import QuickMath from "./store";

// utils
import { generateEquation, generateRandomNumber } from "./game";

interface GameState {
  score: number;
  gameStatus: "READY" | "PLAYING" | "END";
  firstValue: number;
  secondValue: number;
  sum: number;
  yes: () => void;
  no: () => void;
  reset: () => void;
}

export const useStore = create<GameState>((set) => ({
  score: 0,
  gameStatus: "READY",
  firstValue: generateRandomNumber(),
  secondValue: generateRandomNumber(),
  sum: 9,
  yes: () =>
    set(({ score, firstValue, secondValue, sum }) => {
      const previousGame = {
        firstValue,
        secondValue,
        sum,
      };

      const nextGame = generateEquation(previousGame);

      if (firstValue + secondValue === sum) {
        return {
          score: score + 1,
          ...nextGame,
        };
      }

      return {
        gameStatus: "END",
      };
    }),
  no: () =>
    set(({ score, firstValue, secondValue, sum }) => {
      const previousGame = {
        firstValue,
        secondValue,
        sum,
      };

      const nextGame = generateEquation(previousGame);

      if (firstValue + secondValue !== sum) {
        return {
          score: score + 1,
          ...nextGame,
        };
      }

      return {
        gameStatus: "END",
      };
    }),
  reset: () =>
    set(() => {
      const nextGame = generateEquation();

      return {
        score: 0,
        gameStatus: "READY",
        ...nextGame,
      };
    }),
}));
