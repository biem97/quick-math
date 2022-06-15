import create from "zustand";

// utils
import { generateEquation, initializeGame } from "./game";

// types
import { GameState } from "./types";

interface GameActions {
  yes: () => void;
  no: () => void;
  reset: () => void;
}

interface GameStore extends GameState {
  actions: GameActions;
}

export const useStore = create<GameStore>((set) => {
  const initialGameValue = initializeGame();

  return {
    ...initialGameValue,
    actions: {
      yes: () =>
        set((state) => {
          const { firstValue, secondValue, sum, score } = state;

          if (firstValue + secondValue === sum) {
            const nextGame = generateEquation(state);
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
        set((state) => {
          const { score, firstValue, secondValue, sum } = state;

          if (firstValue + secondValue !== sum) {
            const nextGame = generateEquation(state);
            return {
              score: score + 1,
              ...nextGame,
            };
          }

          return {
            gameStatus: "END",
          };
        }),
      reset: () => set(() => initializeGame()),
    },
  };
});
