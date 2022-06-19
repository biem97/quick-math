import create from "zustand";

// utils
import { generateNextGame, initializeGame } from "./game";

// types
import { GameState } from "./types";

// Media
import soundPlayer from "./soundPlayer";

interface GameActions {
  yes: () => void;
  no: () => void;
  reset: () => void;
  end: () => void;
  home: () => void;
  toggleSound: () => void;
}

interface GameStore extends GameState {
  isSoundOn: boolean;
  actions: GameActions;
}

export const useGameStore = create<GameStore>((set) => {
  const initialGameValue = initializeGame();

  return {
    firstValue: 0,
    secondValue: 0,
    score: 0,
    sum: 0,
    timeoutDuration: 0,
    gameStatus: "NOT_READY",
    isSoundOn: true,
    actions: {
      yes: () =>
        set((state) => {
          const { firstValue, secondValue, sum } = state;
          if (firstValue + secondValue === sum) {
            state.isSoundOn && soundPlayer.playCorrectAnswerSound();
            const nextGame = generateNextGame(state);
            return nextGame;
          }

          // End game
          state.isSoundOn && soundPlayer.playWrongAnswerSound();
          return {
            gameStatus: "END",
          };
        }),
      no: () =>
        set((state) => {
          const { firstValue, secondValue, sum } = state;

          if (firstValue + secondValue !== sum) {
            state.isSoundOn && soundPlayer.playCorrectAnswerSound();
            const nextGame = generateNextGame(state);
            return nextGame;
          }

          // End game
          state.isSoundOn && soundPlayer.playWrongAnswerSound();
          return {
            gameStatus: "END",
          };
        }),
      reset: () => set(() => initializeGame()),
      end: () =>
        set((state) => {
          // End game
          state.isSoundOn && soundPlayer.playWrongAnswerSound();
          return {
            gameStatus: "END",
          };
        }),
      home: () =>
        set(() => {
          return {
            gameStatus: "NOT_READY",
          };
        }),
      toggleSound: () =>
        set((state) => ({
          isSoundOn: !state.isSoundOn,
        })),
    },
  };
});
