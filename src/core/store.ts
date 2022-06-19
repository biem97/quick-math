import create from "zustand";

// utils
import { generateNextGame, initializeGame } from "./game";

// types
import { GameState } from "./types";

// Media
import soundPlayer from "./soundPlayer";

// Scores Board
import scoresBoard from "./scoresBoard";

interface GameActions {
  yes: () => void;
  no: () => void;
  play: () => void;
  end: () => void;
  home: () => void;
  seeScoresBoard: () => void;
  toggleSound: () => void;
}

interface GameStore extends GameState {
  isSoundOn: boolean;
  scoresBoard: number[];
  bestScore: number;
  actions: GameActions;
}

export const useGameStore = create<GameStore>((set) => {
  const initialGameValue = initializeGame();

  return {
    ...initialGameValue,
    isSoundOn: true,
    bestScore: scoresBoard.bestScore,
    scoresBoard: scoresBoard.scoresBoard,
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
          scoresBoard.updateScoresBoard(state.score);
          return {
            gameStatus: "END",
            bestScore: scoresBoard.bestScore,
            scoresBoard: scoresBoard.scoresBoard,
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
          scoresBoard.updateScoresBoard(state.score);
          return {
            gameStatus: "END",
            bestScore: scoresBoard.bestScore,
            scoresBoard: scoresBoard.scoresBoard,
          };
        }),
      end: () =>
        set((state) => {
          // End game
          state.isSoundOn && soundPlayer.playWrongAnswerSound();
          scoresBoard.updateScoresBoard(state.score);
          return {
            gameStatus: "END",
            bestScore: scoresBoard.bestScore,
            scoresBoard: scoresBoard.scoresBoard,
          };
        }),
      play: () => set(() => initializeGame("READY")),
      home: () =>
        set(() => {
          return {
            gameStatus: "HOME",
          };
        }),
      seeScoresBoard: () =>
        set(() => {
          return {
            gameStatus: "SCORES_BOARD",
          };
        }),
      toggleSound: () =>
        set((state) => ({
          isSoundOn: !state.isSoundOn,
        })),
    },
  };
});
