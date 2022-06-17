import create from "zustand";

// utils
import { generateNextGame, initializeGame } from "./game";

// types
import { GameState } from "./types";

interface GameActions {
  yes: () => void;
  no: () => void;
  reset: () => void;
  end: () => void;
}

interface GameStore extends GameState {
  actions: GameActions;
}

export const useGameStore = create<GameStore>((set) => {
  const initialGameValue = initializeGame();

  return {
    ...initialGameValue,
    actions: {
      yes: () =>
        set((state) => {
          const { firstValue, secondValue, sum } = state;
          if (firstValue + secondValue === sum) {
            const nextGame = generateNextGame(state);
            return nextGame;
          }

          return {
            gameStatus: "END",
          };
        }),
      no: () =>
        set((state) => {
          const { firstValue, secondValue, sum } = state;

          if (firstValue + secondValue !== sum) {
            const nextGame = generateNextGame(state);
            return nextGame;
          }

          return {
            gameStatus: "END",
          };
        }),
      reset: () => set(() => initializeGame()),
      end: () =>
        set(() => ({
          gameStatus: "END",
        })),
    },
  };
});
